import { Callback } from '@/shared'
import { MessageCode, SocketEvents, WsEvents } from '../constants'
import { SocketMessage, WorkerData } from '../../types'

class SocketNotification {
	private worker: SharedWorker | null = null
	private connected = false
	private reconnected = false
	private ping = 0
	private comparePingsTimer: NodeJS.Timer | null = null
	private listeners: Record<string, Callback<WorkerData<string>>> | null = null

	private notify = (e: MessageEvent<WorkerData<string>>) => {
		if (!this.listeners) return
		Object.keys(this.listeners).forEach((key: string) => {
			if (!this.listeners || key !== e.data.type) return
			this.listeners[key]?.(e.data)
		})
	}

	private subscribe = (socketEvent: SocketEvents, callback: Callback<WorkerData<string>>) => {
		if (!this.worker) {
			return new Error('Соединение с сервером не установлено')
		}
		if (!this.listeners) this.listeners = {}
		this.listeners[socketEvent] = callback
	}

	private reconnect = (connectionId: string) => {
		this.reconnected = true
		setTimeout(() => {
			this.startConnection(connectionId)
		}, 3000)
		if (this.connected) this.disconnect(connectionId)
	}

	checkComparePing = (reconnect: Callback) => {
		this.clearCheckComparePing()
		let prevPing = 1
		this.comparePingsTimer = setInterval(() => {
			if (prevPing !== this.ping) {
				prevPing = this.ping
				return
			}
			reconnect()
		}, 30000)
	}

	clearCheckComparePing = () => {
		if (!this.comparePingsTimer) return
		clearInterval(this.comparePingsTimer)
	}

	startConnection = (connectionId: string) => {
		if (!('SharedWorker' in window)) return
		this.worker = new SharedWorker(new URL('./SocketWorker', import.meta.url))
		this.worker.port.start()
		this.worker.port.onmessage = this.notify

		this.worker.port.postMessage({
			connectionId,
			type: SocketEvents.OPEN,
			// TODO заменить на переменную
			payload: `ws://localhost:27800/?userId=${connectionId}`,
		})
	}

	disconnect = (connectionId: string) => {
		this.worker?.port.postMessage({ connectionId, type: SocketEvents.CLOSE })
	}

	onOpenConnection = (connectionId: string, callback?: Callback) => {
		this.subscribe(SocketEvents.OPEN, (data: WorkerData<string>) => {
			if (data.payload === '1') {
				this.connected = true
				this.reconnected = false

				this.checkComparePing(() => {
					this.reconnect(connectionId)
				})
				// eslint-disable-next-line no-console
				console.log('Соединение установлено')
				callback?.()
			}
		})
	}

	onCloseConnection = (callback?: Callback) => {
		this.subscribe(SocketEvents.CLOSE, (data: WorkerData<string>) => {
			console.log(data)
			if (data.payload !== String(MessageCode.CLOSE)) this.reconnected = true

			this.connected = false
			this.worker?.port.close()
			callback?.(this.connected, this.reconnected)

			console.log('Соединение остановлено')
		})
	}

	onMessage = (callback: Callback<SocketMessage>) => {
		this.subscribe(SocketEvents.MESSAGE, (messageData: WorkerData<string>) => {
			console.log(messageData)
			const message = JSON.parse(messageData.payload) as SocketMessage

			if (message.value?.event === WsEvents.WELCOME) return

			if (message.value?.event === WsEvents.PING) {
				this.ping = Number(message.value.data as string)
				return
			}

			callback(message)
		})
	}
}
export const socketNotification = new SocketNotification()

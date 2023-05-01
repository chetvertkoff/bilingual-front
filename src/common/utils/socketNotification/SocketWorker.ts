import { SocketEvents } from '@/common/utils/socketNotification/constants'

interface EventData {
	connectionId: number
	type: SocketEvents
	payload: string
}

interface ConnectionState {
	socket: WebSocket
	timerId?: NodeJS.Timer
}

const ports: MessagePort[] = []
const connections = new Map<EventData['connectionId'], ConnectionState>()

const handleMessage = (eventData: EventData, port: MessagePort) => {
	try {
		const { type, payload, connectionId } = eventData ?? {}
		const currentWsState = connections.get(connectionId)

		if (type === SocketEvents.OPEN) {
			if (currentWsState?.socket && currentWsState.socket.readyState === 1) {
				port.postMessage({
					type: SocketEvents.OPEN,
					payload: String(currentWsState.socket.readyState),
				})
				return
			}

			const socket = new WebSocket(payload as string)

			connections.set(connectionId, {
				socket,
			})

			socket.addEventListener(SocketEvents.OPEN, (event) => {
				const currentWsState = connections.get(connectionId)

				if (!currentWsState) return

				clearInterval(currentWsState.timerId)

				const ws = event.target as WebSocket
				ports.forEach((port) => {
					port.postMessage({
						type: SocketEvents.OPEN,
						payload: String(ws.readyState),
					})
				})

				currentWsState.timerId = setInterval(() => {
					if (socket && socket.readyState === 1) {
						console.log('pong')
						socket.send('pong')
					}
				}, 30000)
			})

			socket.addEventListener(SocketEvents.MESSAGE, (event: MessageEvent<unknown>) => {
				ports.forEach((port) => {
					port.postMessage({
						type: SocketEvents.MESSAGE,
						payload: event.data,
					})
				})
			})

			socket.addEventListener(SocketEvents.CLOSE, (event) => {
				const currentWsState = connections.get(connectionId)

				if (!currentWsState) return

				clearInterval(currentWsState.timerId)
				console.log('worker close', event)
				ports.forEach((port) => {
					port.postMessage({
						type: SocketEvents.CLOSE,
						payload: String(event.code),
					})
				})
			})
		}

		if (type === SocketEvents.CLOSE) {
			if (currentWsState?.socket && currentWsState.socket.readyState === 1) {
				currentWsState.socket.close()
			}
		}
		// eslint-disable-next-line no-empty
	} catch (error) {}
}

// @ts-ignore
onconnect = (e: MessageEvent) => {
	const port = e.ports[0]
	ports.push(port)

	port.onmessage = (event: MessageEvent<EventData>) => {
		handleMessage(event.data, port)
	}
}

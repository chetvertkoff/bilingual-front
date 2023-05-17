import { SocketEvents, WsEvents } from '../lib/constants'

export interface SocketMessage<T = unknown> {
	success: boolean
	error?: string
	value?: {
		event: WsEvents
		data?: T
	}
}

export interface WorkerData<T = unknown> {
	type: string
	payload: T
}

export interface EventData {
	connectionId: number
	type: SocketEvents
	payload: string
}

export interface ConnectionState {
	socket: WebSocket
	timerId?: NodeJS.Timer
}

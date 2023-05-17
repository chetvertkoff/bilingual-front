import { useEffect } from 'react'
import { notificationHandlerStore, SocketMessage } from '@/enteties/notification'
import { socketNotification } from '../utils/SocketNotification'
import { Notification } from '../../model'

const { startConnection, disconnect, onMessage, onCloseConnection, onOpenConnection } =
	socketNotification

const { addNotification } = notificationHandlerStore

export const useNotification = (handlers: Record<any, any>) => {
	useEffect(() => {
		startConnection('15')

		onOpenConnection('15')

		onCloseConnection()

		onMessage((message: SocketMessage) => {
			if (!message.success && message?.error) {
				addNotification(new Notification(message.error, 'error'))
				return
			}
			if (message.value?.event) handlers[message.value.event]?.(message)
		})

		return () => {
			disconnect('15')
		}
	}, []) // TODO userId
}

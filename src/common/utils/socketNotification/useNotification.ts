import { useEffect } from 'react'
import { messageHandlers } from '@/common/utils/socketNotification/bookMessageHandlers'
import { NotificationModel } from '@/common'
import { notificationHandlerStore } from '../NotificationStore'
import { SocketMessage, socketNotification } from './SocketNotification'

const { startConnection, disconnect, onMessage, onCloseConnection, onOpenConnection } =
	socketNotification

const { addNotification } = notificationHandlerStore

export const useNotification = (handlers: typeof messageHandlers) => {
	useEffect(() => {
		startConnection('15')

		onOpenConnection('15')

		onCloseConnection()

		onMessage((message: SocketMessage) => {
			if (!message.success && message?.error) {
				addNotification(new NotificationModel(message.error, 'error'))
				return
			}
			if (message.value?.event) handlers[message.value.event]?.(message)
		})

		return () => {
			disconnect('15')
		}
	}, []) // TODO userId
}

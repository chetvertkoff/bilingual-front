import React from 'react'
import { Outlet } from 'react-router-dom'
import { MessageOutput, useNotification } from '@/enteties/notification'
import { wsMessageHandlers } from '../wsMessageHandlers'

export const BaseLayout = () => {
	useNotification(wsMessageHandlers)

	return (
		<>
			<MessageOutput />
			<Outlet />
		</>
	)
}

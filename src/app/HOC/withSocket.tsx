import React, { ComponentType } from 'react'
import { useNotification } from '@/common'
import { messageHandlers } from '@/common/utils/socketNotification/bookMessageHandlers'

export const withSocket =
	<T extends {} = {}>(Component: ComponentType<T>) =>
	(props: T) => {
		// TODO перенести сюда содержимое хука
		useNotification(messageHandlers)

		return <Component {...(props as T)} />
	}

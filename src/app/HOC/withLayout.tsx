import React, { ComponentType } from 'react'
import { MessageOutput } from '@/common'

export const withLayout =
	<T extends {} = {}>(Component: ComponentType<T>) =>
	(props: T) => {
		return (
			<>
				<MessageOutput />
				<Component {...(props as T)} />
			</>
		)
	}

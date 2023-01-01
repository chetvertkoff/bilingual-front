import React, { ComponentType, useEffect, useRef } from 'react'
import { ws } from '@/common'

export const withSocket =
	<T extends {} = {}>(Component: ComponentType<T>) =>
	(props: T) => {
		const socket = useRef<WebSocket | null>(null)

		useEffect(() => {
			socket.current = ws()

			return () => {
				if (socket.current) {
					socket.current.close()
				}
			}
		}, [])

		return <Component {...(props as T)} />
	}

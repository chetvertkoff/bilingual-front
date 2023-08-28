import React, { forwardRef, PropsWithChildren, useEffect } from 'react'
import { Callback } from '@/shared'
import { observer } from 'mobx-react-lite'
import { readBookStore } from '../store'

interface Props {
	onTop?: Callback
	onBottom?: Callback
	onContainerInit?: Callback
}

export const BookScrollContainer = observer(
	forwardRef<HTMLDivElement, PropsWithChildren<Props>>(
		({ children, onBottom, onTop, onContainerInit }, container) => {
			const { windowHeight } = readBookStore

			const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
				const { currentTarget } = e
				if (currentTarget.scrollTop <= 0) {
					onTop?.()
				}
				if (
					currentTarget.scrollHeight - currentTarget.scrollTop - 1 <=
					currentTarget.clientHeight
				) {
					onBottom?.()
				}
			}

			useEffect(() => {
				onContainerInit?.()
			}, [])

			return (
				<div
					ref={container}
					style={{
						height: windowHeight,
						overflow: 'auto',
					}}
					onScroll={onScroll}
				>
					{children}
				</div>
			)
		}
	)
)

import React, { FC, PropsWithChildren, useRef } from 'react'
import { Callback } from '@/common'

interface Props extends PropsWithChildren {
	onTop?: Callback
	onBottom?: Callback
}

export const BookScrollContainer: FC<Props> = ({ children, onBottom, onTop }) => {
	const container = useRef<HTMLDivElement>(null)
	const scrollContainer = useRef<HTMLDivElement>(null)

	const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
		const { currentTarget } = e
		if (currentTarget.scrollTop <= 0) {
			onTop?.()
		}
		if (currentTarget.scrollHeight - currentTarget.scrollTop - 1 <= currentTarget.clientHeight) {
			onBottom?.()
		}
	}

	return (
		<div style={{ height: '100%' }} ref={container}>
			<div
				style={{
					overflowY: 'auto',
					width: '100%',
				}}
				ref={scrollContainer}
				className="book-read"
				onScroll={onScroll}
			>
				{children}
			</div>
		</div>
	)
}

import React, { FC, PropsWithChildren } from 'react'
import { Callback } from '@/common'

interface Props extends PropsWithChildren {
	onBottom?: Callback
}

export const ScrollContainer: FC<Props> = ({ children, onBottom }) => {
	const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
		const { currentTarget } = e

		if (currentTarget.scrollHeight - currentTarget.scrollTop - 1 <= currentTarget.clientHeight) {
			onBottom?.()
		}
	}

	return (
		<div style={{ height: '300px', overflow: 'scroll' }} onScroll={onScroll}>
			{children}
		</div>
	)
}

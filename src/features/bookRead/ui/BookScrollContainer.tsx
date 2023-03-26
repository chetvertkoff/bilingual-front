import React, { FC, PropsWithChildren, useEffect, useRef } from 'react'
import { Callback } from '@/common'
import { useInView } from 'react-intersection-observer'

interface Props extends PropsWithChildren {
	onTop?: Callback
	onBottom?: Callback
	onChangeScrollHeight?: Callback
}

export const BookScrollContainer: FC<Props> = ({
	children,
	onBottom,
	onTop,
	onChangeScrollHeight,
}) => {
	const container = useRef<HTMLDivElement>()
	const scrollContainer = useRef<HTMLDivElement>()
	const scrollContainerHeight = useRef()

	if (
		scrollContainerHeight.current &&
		scrollContainer.current &&
		scrollContainerHeight.current !== scrollContainer.current.scrollHeight
	) {
		const isHigh = scrollContainer.current?.scrollHeight > container.current?.clientHeight
		onChangeScrollHeight?.(isHigh)
		console.log('change')
	}

	const onScroll = (e) => {
		const { target } = e
		if (target.scrollTop <= 0) {
			console.log('top')
		}
		if (target.scrollHeight - target.scrollTop <= target.clientHeight) {
			console.log('bottom')
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

import React, { FC, useRef } from 'react'
import { Callback } from '@/shared'
import { useVirtualizer } from '@tanstack/react-virtual'

interface Props {
	onTop?: Callback
	onBottom?: Callback

	children: Callback<unknown, JSX.Element>
	items: { id: number }[]
}

export const BookScrollContainer: FC<Props> = ({ children, onBottom, onTop, items }) => {
	const container = useRef<HTMLDivElement>(null)

	const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
		const { currentTarget } = e
		if (currentTarget.scrollTop <= 0) {
			onTop?.()
		}
		if (currentTarget.scrollHeight - currentTarget.scrollTop - 1 <= currentTarget.clientHeight) {
			onBottom?.()
		}
	}

	const rowVirtualizer = useVirtualizer({
		count: items.length,
		getScrollElement: () => container.current,
		estimateSize: (i) => {
			const item = items[i]
			if (item.tagName === 'p') return item.originalText.length / 5 + 20
			return 90
		},
	})

	return (
		<div
			ref={container}
			style={{
				height: window.innerHeight,
				overflow: 'auto', // Make it scroll!
			}}
			onScroll={onScroll}
		>
			<div
				style={{
					height: `${rowVirtualizer.getTotalSize()}px`,
					width: '100%',
					position: 'relative',
				}}
			>
				{rowVirtualizer.getVirtualItems().map((virtualItem) => {
					return (
						<div
							key={items[virtualItem.index].id}
							style={{
								position: 'absolute',
								top: 0,
								left: 0,
								width: '100%',
								height: `${virtualItem.size}px`,
								transform: `translateY(${virtualItem.start}px)`,
							}}
						>
							{children(items[virtualItem.index])}
						</div>
					)
				})}
			</div>
		</div>
	)
}

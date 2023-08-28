import React, { FC, ReactNode, useEffect, useRef, useState } from 'react'
import { useVirtualizer, VirtualItem } from '@tanstack/react-virtual'
import { ParagraphModel } from '@/enteties/book/paragraph'
import { Callback } from '@/shared'
import { observer } from 'mobx-react-lite'
import { readBookStore } from '../store'

interface Props {
	items: ParagraphModel[]
	fontSizeLevel: number
	children?: Callback<ParagraphModel, ReactNode>
	getSize: Callback<ParagraphModel, number>
	container: HTMLDivElement
}

export const BookRowVirtualScroll: FC<Props> = observer(
	({ items, fontSizeLevel, children, getSize, container }) => {
		const width = useRef(fontSizeLevel)
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const [_, forceResize] = useState({})
		const { windowHeight } = readBookStore

		const rowVirtualizer = useVirtualizer({
			count: items.length,
			paddingStart: width.current,
			getScrollElement: () => container,
			estimateSize: (i) => {
				return getSize(items[i])
			},
		})

		useEffect(() => {
			width.current = fontSizeLevel
		}, [fontSizeLevel])

		useEffect(() => {
			width.current = width.current === fontSizeLevel ? width.current + 0.1 : width.current - 0.1
			forceResize({})
		}, [windowHeight])

		if (!items.length) return null

		return (
			<div
				style={{
					height: `${rowVirtualizer.getTotalSize()}px`,
					width: '100%',
					position: 'relative',
				}}
			>
				{children &&
					rowVirtualizer.getVirtualItems().map((virtualItem: VirtualItem) => {
						if (!virtualItem) return null

						const item = items[virtualItem.index]

						return (
							<div
								key={item.id}
								style={{
									position: 'absolute',
									top: 0,
									left: 0,
									width: '100%',
									height: `${virtualItem.size}px`,
									transform: `translateY(${virtualItem.start}px)`,
								}}
							>
								{children(item)}
							</div>
						)
					})}
			</div>
		)
	}
)

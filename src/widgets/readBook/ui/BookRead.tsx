import React, { FC, useEffect, useRef, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { ParagraphModel, paragraphStore } from '@/enteties/book/paragraph'
import { Paragraph } from '@/features/bookParagraph'
import { Box } from '@mui/material'
import { toJS } from 'mobx'
import { bookOptionsStore } from '@/enteties/book/bookOptions'
import { bookReadTypography, getEstimateSize } from '@/widgets/readBook/lib'
import { BookOptions } from '@/features/changeOptions'
import { TextSizeHelper } from '@/widgets/readBook/ui/TextSizeHelper'
import { readBookStore } from '../store'
import { Heading } from './Heading'
import { ParagraphRequestParams } from '../model'
import { BookScrollContainer } from './BookScrollContainer'
import { BookRowVirtualScroll } from './BookRowVirtualScroll'
import './style.scss'

const { loadParagraphsByParams } = paragraphStore
const { getOptions } = bookOptionsStore
const { changeWindowHeight } = readBookStore

interface ComponentProps {
	bookId: string
}
export const BookRead: FC<ComponentProps> = observer(({ bookId }) => {
	const { paragraphs, firstParagraph, lastParagraph, clearStore } = paragraphStore
	const { options } = bookOptionsStore
	const prevSizeNode = useRef<HTMLDivElement>(null)
	const container = useRef<HTMLDivElement>(null)

	const [initContainer, setInitContainer] = useState(false)

	useEffect(() => {
		if (!bookId) return
		loadParagraphsByParams(new ParagraphRequestParams({ book_id: bookId }))
	}, [bookId])

	useEffect(() => {
		if (paragraphs.length && !options) getOptions()
	}, [paragraphs.length])

	useEffect(() => {
		const c = () => {
			changeWindowHeight(window.innerHeight)
		}

		window.addEventListener('resize', c)

		return () => {
			window.removeEventListener('resize', c)
			clearStore()
		}
	}, [])

	const onScrollTop = () => {
		if (firstParagraph?.id === paragraphs[0]?.id) return
		loadParagraphsByParams(
			new ParagraphRequestParams({
				id_less_than: String(paragraphs[0].id),
				book_id: bookId,
			})
		)
	}
	const onScrollBottom = () => {
		if (lastParagraph?.id === paragraphs[paragraphs.length - 1]?.id) return
		loadParagraphsByParams(
			new ParagraphRequestParams({
				id_more_than: String(paragraphs[paragraphs.length - 1].id),
				book_id: bookId,
			})
		)
	}

	const getSize = (item: ParagraphModel) =>
		getEstimateSize(item, options?.fontSizeLevel ?? 1, prevSizeNode?.current)

	return (
		<div className="book-read">
			<TextSizeHelper ref={prevSizeNode} />

			{options && (
				<>
					<BookScrollContainer
						onTop={onScrollTop}
						onBottom={onScrollBottom}
						ref={container}
						onContainerInit={() => setInitContainer(true)}
					>
						{initContainer && (
							<BookRowVirtualScroll
								container={container.current!}
								items={toJS(paragraphs)}
								fontSizeLevel={options?.fontSizeLevel ?? 1}
								getSize={getSize}
							>
								{container.current
									? (p: ParagraphModel) => (
											<Box sx={{ pl: '10px', pr: '10px' }}>
												{p.tagName !== 'p' ? (
													<Heading
														tagName={p.tagName}
														fontSize={bookReadTypography[p.tagName][options.fontSizeLevel]}
													>
														{p.originalText}
													</Heading>
												) : (
													<Paragraph
														key={p.id}
														originalText={p.originalText}
														translate={p.translate}
														fontSize={bookReadTypography[p.tagName][options.fontSizeLevel]}
													/>
												)}
											</Box>
									  )
									: undefined}
							</BookRowVirtualScroll>
						)}
					</BookScrollContainer>

					<BookOptions />
				</>
			)}
		</div>
	)
})

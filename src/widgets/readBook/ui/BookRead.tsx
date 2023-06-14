import React, { FC, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { paragraphStore } from '@/enteties/book/paragraph'
import { Paragraph } from '@/features/bookParagraph'
import { Box } from '@mui/material'
import { toJS } from 'mobx'
import { bookOptionsStore } from '@/enteties/book/bookOptions'
import { paragraphSizes } from '@/widgets/readBook/lib'
import SettingsIcon from '@mui/icons-material/Settings'
import { Heading } from './Heading'
import { ParagraphRequestParams } from '../model'
import { BookScrollContainer } from './BookScrollContainer'
import { VirtualListScroll } from './VirtualScroll'
import './style.scss'

const { loadParagraphsByParams } = paragraphStore

interface ComponentProps {
	bookId: string
}
export const BookRead: FC<ComponentProps> = observer(({ bookId }) => {
	const { paragraphs, firstParagraph, lastParagraph, clearStore } = paragraphStore
	const { options } = bookOptionsStore

	useEffect(() => {
		if (!bookId) return
		loadParagraphsByParams(new ParagraphRequestParams({ book_id: bookId }))
	}, [bookId])

	useEffect(
		() => () => {
			clearStore()
		},
		[]
	)

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

	return (
		<div className="book-read">
			<BookScrollContainer onTop={onScrollTop} onBottom={onScrollBottom} items={toJS(paragraphs)}>
				{(p) => (
					<Box sx={{ pl: '10px', pr: '10px' }}>
						{p.tagName !== 'p' ? (
							<Heading tagName={p.tagName}>{p.originalText}</Heading>
						) : (
							// <p>{p.originalText}</p>
							<Paragraph
								key={p.id}
								originalText={p.originalText}
								translate={p.translate}
								fontSize={paragraphSizes[options.fontSizeLevel]}
							/>
						)}
					</Box>
				)}
			</BookScrollContainer>

			<div style={{ position: 'fixed', bottom: 0 }}>
				<SettingsIcon sx={{ fontSize: 20 }} />
			</div>
		</div>
	)
})

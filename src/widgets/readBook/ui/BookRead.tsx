import React, { FC, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { paragraphStore } from '@/enteties/book/paragraph'
import { Paragraph } from '@/features/bookParagraph'
import { Box } from '@mui/material'
import { Heading } from './Heading'
import { ParagraphRequestParams } from '../model'
import { BookScrollContainer } from './BookScrollContainer'
import './style.scss'

const { loadParagraphsByParams } = paragraphStore

interface ComponentProps {
	bookId: string
}
export const BookRead: FC<ComponentProps> = observer(({ bookId }) => {
	const { paragraphs, firstParagraph, lastParagraph, clearStore } = paragraphStore

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
		<BookScrollContainer onTop={onScrollTop} onBottom={onScrollBottom}>
			{paragraphs.map((p) => (
				<Box sx={{ pl: '10px', pr: '10px' }}>
					{p.tagName !== 'p' ? (
						<Heading tagName={p.tagName}>{p.originalText}</Heading>
					) : (
						<Paragraph key={p.id} originalText={p.originalText} translate={p.translate} />
					)}
				</Box>
			))}
		</BookScrollContainer>
	)
})

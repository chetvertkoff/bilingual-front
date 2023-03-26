import React, { createRef, FC, useEffect, useRef, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { ChaptersRequestParams, Paragraph } from '@/features/bookRead'
import './style.scss'
import { Box } from '@mui/material'
import { chapterStore } from '@/enteties/book/model/ChapterStore'
import { ParagraphRequestParams } from '@/features/bookRead/utils/ParagraphRequestParams'
import { paragraphStore } from '@/enteties/book'
import { BookScrollContainer } from '@/features/bookRead/ui/BookScrollContainer'

const { loadParagraphsByParams } = paragraphStore

interface ComponentProps {
	bookId: string
}
export const BookRead: FC<ComponentProps> = observer(({ bookId }) => {
	const { paragraphs } = paragraphStore

	const onScrollBottom = () => {
		console.log('bottom')
	}

	useEffect(() => {
		if (!bookId) return
		loadParagraphsByParams(new ParagraphRequestParams({ book_id: bookId }))
	}, [bookId])

	const onChangeScrollHeight = (isHigh) => {
		console.log(isHigh)
		if (isHigh) return
		loadParagraphsByParams(
			new ParagraphRequestParams({
				id_more_than: String(paragraphs[paragraphs.length - 1].id),
				book_id: bookId,
			})
		)
	}

	return (
		<BookScrollContainer onChangeScrollHeight={onChangeScrollHeight}>
			<Box sx={{ pl: '10px', pr: '10px' }}>
				{paragraphs.map((p) => (
					<Paragraph originalText={p.originalText} translate={p.translate} />
				))}
			</Box>
		</BookScrollContainer>
	)
})

import React from 'react'
import { observer } from 'mobx-react-lite'
import { Paragraph } from '@/features/bookRead'
import './style.scss'
import { Box } from '@mui/material'
import { chapterStore } from '@/enteties/book/model/ChapterStore'

export const BookRead = observer(() => {
	const { chapterParagraphs } = chapterStore

	return (
		<div className="book-read">
			<Box sx={{ pl: '10px', pr: '10px' }}>
				{chapterParagraphs.map((ch) => (
					<Paragraph key={ch.id} item={ch} />
				))}
			</Box>
		</div>
	)
})

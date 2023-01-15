import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { bookState } from '@/enteties/book'
import { Reader } from '@/features/bookRead/lib'
import { toJS } from 'mobx'
import { Paragraph } from '@/features/bookRead'
import './style.scss'
import { Box } from '@mui/material'

export const BookRead = observer(() => {
	const [state] = useState(bookState)
	const [reader, setReader] = useState(new Reader([]))
	// console.log(toJS(state))
	useEffect(() => {
		// console.log(toJS(state.book.chapters))
		setReader(new Reader(toJS(state.book.chapters)))
	}, [state.book.chapters])
	// console.log(reader.chapters)
	// reader.generateHtmlPage()
	// console.log(reader.chapters)

	return (
		<div className="book-read">
			<Box sx={{ pl: '10px', pr: '10px' }}>
				{reader.chapterParagraphs.map((ch) => (
					<Paragraph key={ch.id} item={ch} />
				))}
			</Box>
		</div>
	)
})

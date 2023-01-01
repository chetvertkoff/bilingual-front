import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { bookState } from '@/enteties/book'
import { Reader } from '@/features/bookRead/lib'
import { toJS } from 'mobx'

export const BookReadComponent = observer(() => {
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
	console.log(reader.generateHtmlPage())
	return <div dangerouslySetInnerHTML={{ __html: reader.generateHtmlPage() }} />
})

import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Layouts, withLayout } from '@/common'
import { bookActions } from '@/enteties/book'
import { BookRead } from '@/features/bookRead'
import { bookStore } from '@/enteties/book/model/BookStore'

const { loadBook } = bookStore

const Book = () => {
	const { id } = useParams()

	useEffect(() => {
		loadBook(Number(id))
	}, [])

	return (
		<div>
			<BookRead />
		</div>
	)
}
export default withLayout(Book, Layouts.BOOK_READ)

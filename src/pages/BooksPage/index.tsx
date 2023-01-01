import React from 'react'
import { BookUpload } from '@/features/bookUpload/ui'
import { BookItemsComponent, BookState } from '@/enteties/book'
import { Layouts, PageUrls, withLayout } from '@/common'
import { useNavigate } from 'react-router-dom'

const BooksPage = () => {
	const navigate = useNavigate()

	const moveToBook = (book: BookState['book']) => {
		navigate(PageUrls.book.bookPage.replace(':id', String(book.id)))
	}

	return (
		<>
			<BookUpload />
			<BookItemsComponent onItemClick={moveToBook} />
		</>
	)
}
export default withLayout(BooksPage, Layouts.APP)

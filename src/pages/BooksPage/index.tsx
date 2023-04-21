import React from 'react'
import { BookUpload } from '@/features/bookUpload/ui'
import { BookItemsComponent } from '@/enteties/book'
import { BookModel, Layouts, PageUrls, withLayout } from '@/common'
import { useNavigate } from 'react-router-dom'

const BooksPage = () => {
	const navigate = useNavigate()

	const moveToBook = (book: BookModel) => {
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

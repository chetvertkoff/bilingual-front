import React from 'react'
import { BookUpload } from '@/features/bookUpload/ui'
import { BookItemsComponent } from '@/enteties/book'
import { BookModel, Layouts, notificationHandlerStore, PageUrls, withLayout } from '@/common'
import { useNavigate } from 'react-router-dom'

const BooksPage = () => {
	const navigate = useNavigate()

	const moveToBook = (book: BookModel) => {
		navigate(PageUrls.book.bookPage.replace(':id', String(book.id)))
	}

	return (
		<>
			<div
				onClick={() =>
					notificationHandlerStore.addNotification({
						message: String(Math.random(1)),
						type: 'error',
					})
				}
			>
				123
			</div>
			<BookUpload />
			<BookItemsComponent onItemClick={moveToBook} />
		</>
	)
}
export default withLayout(BooksPage, Layouts.APP)

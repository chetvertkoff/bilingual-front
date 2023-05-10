import { observer } from 'mobx-react-lite'
import { BookItemsComponent, bookListStore } from '@/enteties/book'
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { BaseRequestParams, BookModel, PageUrls } from '@/common'
import { ScrollContainer } from '@/features/bookLibrary/ui/ScrollContainer'

const { loadBooks } = bookListStore

export const BookLibrary = observer(() => {
	const { bookList, total, isLoading } = bookListStore
	const navigate = useNavigate()
	const currentLength = useRef(30)

	const moveToBook = (book: BookModel) => {
		navigate(PageUrls.book.bookPage.replace(':id', String(book.id)))
	}

	const onScrollBottom = () => {
		if (isLoading || bookList.length >= total) return
		currentLength.current += 30
		loadBooks(
			new BaseRequestParams({
				skip: currentLength.current - 30,
			})
		)
	}

	return (
		<ScrollContainer onBottom={onScrollBottom}>
			<BookItemsComponent onItemClick={moveToBook} />
		</ScrollContainer>
	)
})

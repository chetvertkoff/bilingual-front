import { observer } from 'mobx-react-lite'
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { BaseRequestParams, BookModel, PageUrls } from '@/shared'
import { BookListComponent, bookListStore } from '@/enteties/book/bookList'
import { Box, Grid } from '@mui/material'
import { ScrollContainer } from './ScrollContainer'
import { BookItem } from './itemLibrary'

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
			<Box>
				<Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
					<BookListComponent>
						{(book: BookModel) => <BookItem key={book.id} item={book} onItemClick={moveToBook} />}
					</BookListComponent>
				</Grid>
			</Box>
		</ScrollContainer>
	)
})

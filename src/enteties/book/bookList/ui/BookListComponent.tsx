import React, { FC, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { BaseRequestParams, Callback } from '@/shared'
import { bookListStore } from '@/enteties/book/bookList/store/BookListStore'
import { BookModel } from '@/shared/types/models/BookModel'
import { toJS } from 'mobx'

const { loadBooks } = bookListStore

interface Props {
	children?: Callback<BookModel, JSX.Element>
}
export const BookListComponent: FC<Props> = observer(({ children }) => {
	const { bookList, clearStore } = bookListStore

	useEffect(() => {
		loadBooks(new BaseRequestParams())

		return () => {
			clearStore()
		}
	}, [])

	return <>{toJS(bookList).map((item) => children?.(toJS(item)))}</>
})

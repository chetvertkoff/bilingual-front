import { observable, runInAction } from 'mobx'
import { BaseState, Book, bookApi } from '@/common'

export interface BookState extends BaseState {
	book: Book
}
export const bookState = observable<BookState>({ book: new Book(), isLoading: false })

export interface BookListState extends BaseState {
	bookList: Book[]
}
export const bookListState = observable<BookListState>({ bookList: [], isLoading: false })

const loadBook = async (id: number) => {
	try {
		bookState.isLoading = true
		const res = await bookApi.getBilingual(id)
		runInAction(() => {
			bookState.book = res
			bookState.isLoading = false
		})
	} catch (e) {}
}

const loadBooks = async () => {
	try {
		const res = await bookApi.getBilingualItems()
		bookListState.isLoading = true
		runInAction(() => {
			bookListState.bookList = res
			bookListState.isLoading = false
		})
	} catch (e) {}
}

export const bookActions = { loadBook, loadBooks }

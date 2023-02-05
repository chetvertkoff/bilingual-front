import { observable, runInAction } from 'mobx'
import { BaseState, Book, bookApi, fakeApi } from '@/common'
import { externalApi } from '@/common/api/external'

export interface BookState extends BaseState {
	book: Book
}
export const bookState = observable<BookState>({ book: new Book(), isLoading: false })

export interface BookListState extends BaseState {
	bookList: Book[]
}
export const bookListState = observable<BookListState>({ bookList: [], isLoading: false })

export interface TranslatedTextState extends BaseState {
	translate: string
}
export const translatedTextState = observable<TranslatedTextState>({
	translate: '',
	isLoading: false,
})

const loadBook = async (id: number) => {
	try {
		bookState.isLoading = true
		const res = await bookApi.getBilingual(id)
		// const res = await fakeApi.getBilingual(id)
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

const loadTranslate = async (text: string) => {
	try {
		return externalApi.getTranslate(text)
	} catch (e) {}
}

export const bookActions = { loadBook, loadBooks, loadTranslate }

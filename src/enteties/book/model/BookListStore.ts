import { BookModel, bookApi } from '@/common'
import { makeAutoObservable } from 'mobx'

export class BookListStore {
	bookList: BookModel[] = []
	isLoading = false

	constructor() {
		makeAutoObservable(this)
	}

	loadBooks = async () => {
		try {
			this.isLoading = true
			const res = await bookApi.getBooks()
			this.bookList = res.entries
			this.isLoading = false
		} catch (e) {}
	}
}

export const bookListStore = new BookListStore()

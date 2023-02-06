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
			this.bookList = await bookApi.getBilingualItems()
			this.isLoading = false
		} catch (e) {}
	}
}

export const bookListStore = new BookListStore()

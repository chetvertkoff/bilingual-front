import { BookModel, bookApi } from '@/common'
import { makeAutoObservable } from 'mobx'
import { externalApi } from '@/common/api/external'

export class BookStore {
	book: null | BookModel = null
	isLoading = false

	constructor() {
		makeAutoObservable(this)
	}

	loadBook = async (id: number) => {
		try {
			this.isLoading = true
			const res = await bookApi.getBilingual(id)
			res.chapters = res.chapters.slice(0, 4)
			this.book = res
			this.isLoading = false
		} catch (e) {}
	}

	static loadTranslate = async (text: string) => {
		try {
			return externalApi.getTranslate(text)
		} catch (e) {}
	}
}

export const bookStore = new BookStore()

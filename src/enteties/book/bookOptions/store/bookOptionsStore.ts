import { makeAutoObservable } from 'mobx'
import { bookOptionsApi } from '@/enteties/book/bookOptions'
import { BookOptions } from '../models'

export class BookOptionsStore {
	options: BookOptions | null = null

	constructor() {
		makeAutoObservable(this)
	}

	getOptions = async () => {
		try {
			this.options = await bookOptionsApi.getOptions()
		} catch (e) {}
	}

	setOptions = async (options: BookOptions) => {
		try {
			this.options = options
			await bookOptionsApi.saveOptions(options)
		} catch (e) {}
	}
}

export const bookOptionsStore = new BookOptionsStore()

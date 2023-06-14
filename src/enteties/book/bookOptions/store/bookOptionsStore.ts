import { makeAutoObservable } from 'mobx'
import { BookOptions } from '../types'

class BookOptionsStore {
	options: BookOptions = {
		fontSizeLevel: 1,
	}

	constructor() {
		makeAutoObservable(this)
	}
}

export const bookOptionsStore = new BookOptionsStore()

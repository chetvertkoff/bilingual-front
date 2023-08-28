import { makeAutoObservable } from 'mobx'
import { BookOptionsStore, bookOptionsStore } from '@/enteties/book/bookOptions'

class ChangeOptionsStore {
	constructor(private bookOptionsStore: BookOptionsStore) {
		makeAutoObservable(this)
	}

	changeOptionFontSizeLevel = (level: number) => {
		this.bookOptionsStore.setOptions({
			...this.bookOptionsStore.options,
			fontSizeLevel: level,
		})
	}
}

export const changeOptionsStore = new ChangeOptionsStore(bookOptionsStore)

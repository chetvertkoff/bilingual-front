import { BaseStore } from '@/common/lib/BaseStore'
import { BaseState, Book, bookApi } from '@/common'
import { runInAction } from 'mobx'

interface State extends BaseState {
	book: null | Book
}

const state: State = {
	book: null,
	isLoading: false,
}
export class BookStore extends BaseStore<State> {
	constructor(state: State) {
		super(state)
	}

	loadBook = async (id: number) => {
		try {
			this.updateStoreValue('isLoading', true)
			const res = await bookApi.getBilingual(id)
			this.updateStoreValue('book', res)
			this.updateStoreValue('isLoading', false)
		} catch (e) {}
	}
}

export const bookStore = new BookStore(state)

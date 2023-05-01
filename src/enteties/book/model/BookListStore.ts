import { BookModel, bookApi, SocketMessage, BaseRequestParams } from '@/common'
import { TranslateBookProgressMessage } from '@/common/utils/socketNotification/bookMessageHandlers'
import { makeAutoObservable, runInAction } from 'mobx'

export class BookListStore {
	bookList: BookModel[] = []
	isLoading = false
	total = 0

	constructor() {
		makeAutoObservable(this)
	}

	loadBooks = async (params: BaseRequestParams, clear?: boolean) => {
		try {
			this.isLoading = true
			const res = await bookApi.getBooks(new BaseRequestParams({ ...params, order: 'DESC' }))
			runInAction(() => {
				this.bookList = clear ? res.entries : [...this.bookList, ...res.entries]
				this.total = res.total
			})
			this.isLoading = false
		} catch (e) {}
	}

	setProgressByMessage = (message: SocketMessage<TranslateBookProgressMessage>) => {
		const { progress, bookId } = message.value?.data ?? {}
		this.bookList.forEach((item) => {
			if (item.id === bookId) {
				item.progress = Number(progress)
			}
		})
	}

	clearStore = () => {
		this.bookList = []
		this.isLoading = false
		this.total = 0
	}
}

export const bookListStore = new BookListStore()

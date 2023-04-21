import { SocketMessage, WsEvents } from '@/common'
import { bookListStore } from '@/enteties/book'
import { toJS } from 'mobx'

interface TranslateBookProgressMessage {
	progress: string
	bookId: string
}

const { loadBooks } = bookListStore

const bookMessageHandlers = {
	[WsEvents.BOOKS_REQUEST]: () => {
		loadBooks()
	},
	[WsEvents.TRANSLATE_BOOK_PROGRESS]: (message: SocketMessage<TranslateBookProgressMessage>) => {
		const { bookList } = bookListStore
		const { progress, bookId } = message.value?.data ?? {}
		console.log(progress)
		bookList.forEach((item) => {
			if (item.id === bookId) {
				item.progress = Number(progress)
			}
		})
	},
}

export const messageHandlers = {
	...bookMessageHandlers,
	...{
		[WsEvents.WELCOME]: () => {},
		[WsEvents.PING]: () => {},
	},
}

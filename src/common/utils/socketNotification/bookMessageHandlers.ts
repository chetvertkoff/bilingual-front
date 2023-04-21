import { notificationHandlerStore, NotificationModel, SocketMessage, WsEvents } from '@/common'
import { bookListStore } from '@/enteties/book'
import { toJS } from 'mobx'

interface TranslateBookProgressMessage {
	progress: string
	bookId: string
}

const { loadBooks } = bookListStore
const { addNotification } = notificationHandlerStore

const bookMessageHandlers = {
	[WsEvents.BOOKS_REQUEST]: () => {
		loadBooks()
		addNotification(new NotificationModel('Загрузка завершена', 'info'))
	},
	[WsEvents.TRANSLATE_BOOK_PROGRESS]: (message: SocketMessage<TranslateBookProgressMessage>) => {
		const { bookList } = bookListStore
		const { progress, bookId } = message.value?.data ?? {}
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

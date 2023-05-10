import {
	BaseRequestParams,
	notificationHandlerStore,
	NotificationModel,
	SocketMessage,
	WsEvents,
} from '@/common'
import { bookListStore } from '@/enteties/book'

export interface TranslateBookProgressMessage {
	progress: string
	bookId: string
}

const { loadBooks } = bookListStore
const { addNotification } = notificationHandlerStore

const bookMessageHandlers = {
	[WsEvents.BOOKS_REQUEST]: (data: SocketMessage<{ bookId: number }>) => {
		const id = data?.value?.data?.bookId
		if (id) loadBooks(new BaseRequestParams({ id: String(id), order: 'ASC' }))
	},
	[WsEvents.BOOK_TRANSLATED]: () => {
		loadBooks(new BaseRequestParams())
		addNotification(new NotificationModel('Загрузка завершена', 'info'))
	},
	[WsEvents.TRANSLATE_BOOK_PROGRESS]: (message: SocketMessage<TranslateBookProgressMessage>) => {
		bookListStore.setProgressByMessage(message)
	},
}

export const messageHandlers = {
	...bookMessageHandlers,
	...{
		[WsEvents.WELCOME]: () => {},
		[WsEvents.PING]: () => {},
	},
}

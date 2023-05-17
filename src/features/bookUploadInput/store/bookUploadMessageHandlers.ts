import { BaseRequestParams } from '@/shared'
import { bookListStore, TranslateBookProgressMessage } from '@/enteties/book/bookList'
import {
	notificationHandlerStore,
	SocketMessage,
	WsEvents,
	Notification,
} from '@/enteties/notification'

const { loadBooks } = bookListStore
const { addNotification } = notificationHandlerStore

export const bookUploadMessageHandlers = {
	[WsEvents.BOOKS_REQUEST]: (data: SocketMessage<{ bookId: number }>) => {
		const id = data?.value?.data?.bookId
		if (id) loadBooks(new BaseRequestParams({ id: String(id), order: 'ASC' }))
	},

	[WsEvents.BOOK_TRANSLATED]: () => {
		loadBooks(new BaseRequestParams(), true)
		addNotification(new Notification('Загрузка завершена', 'info'))
	},

	[WsEvents.TRANSLATE_BOOK_PROGRESS]: (message: SocketMessage<TranslateBookProgressMessage>) => {
		bookListStore.setProgressByMessage(message)
	},
}

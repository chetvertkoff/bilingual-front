export enum SocketEvents {
	OPEN = 'open',
	CLOSE = 'close',
	MESSAGE = 'message',
	ERROR = 'error',
}

export enum MessageCode {
	CLOSE_SERVER = 1006,
	CLOSE = 1000,
}

export enum WsEvents {
	BOOKS_REQUEST = 'BOOKS_REQUEST',
	WELCOME = 'WELCOME',
	TRANSLATE_BOOK_PROGRESS = 'TRANSLATE_BOOK_PROGRESS',
	BOOK_TRANSLATED = 'BOOK_TRANSLATED',
	PING = 'PING',
}

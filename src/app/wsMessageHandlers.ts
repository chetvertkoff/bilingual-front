import { WsEvents } from '@/enteties/notification'
import { bookUploadMessageHandlers } from '@/features/bookUploadInput'

export const wsMessageHandlers = {
	...bookUploadMessageHandlers,
	...{
		[WsEvents.WELCOME]: () => {},
		[WsEvents.PING]: () => {},
	},
}

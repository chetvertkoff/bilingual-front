import { AlertColor } from '@mui/material/Alert/Alert'

export class NotificationModel {
	constructor(public message: string, public type: AlertColor) {
		this.message = message
		this.type = type
	}
}

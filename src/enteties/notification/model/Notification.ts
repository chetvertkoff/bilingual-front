import { AlertColor } from '@mui/material/Alert/Alert'

export class Notification {
	constructor(public message: string, public type: AlertColor) {
		this.message = message
		this.type = type
	}
}

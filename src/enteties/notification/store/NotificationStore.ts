import { makeAutoObservable, toJS } from 'mobx'
import { v4 as uuidv4 } from 'uuid'
import { Notification } from '../model'

export class NotificationStore {
	notifications: Map<string, Notification | unknown> = new Map()

	constructor() {
		makeAutoObservable(this)
	}

	get notificationList() {
		const notifications: Notification[] = []
		this.notifications.forEach((item) => {
			notifications.push(toJS(item) as Notification)
		})
		return notifications
	}

	addNotification = (notification: Notification) => {
		const id = uuidv4()
		this.notifications.set(id, notification)
		setTimeout(() => {
			this.notifications.delete(id)
		}, 5000)
	}
}

export const notificationHandlerStore = new NotificationStore()

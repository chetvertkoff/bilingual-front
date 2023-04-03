import { makeAutoObservable, toJS } from 'mobx'
import { NotificationModel } from '@/common'
import { v4 as uuidv4 } from 'uuid'

export class NotificationStore {
	notifications: Map<string, NotificationModel | unknown> = new Map()

	constructor() {
		makeAutoObservable(this)
	}

	get notificationList() {
		const notifications: NotificationModel[] = []
		this.notifications.forEach((item) => {
			notifications.push(toJS(item) as NotificationModel)
		})
		return notifications
	}

	addNotification = (notification: NotificationModel) => {
		const id = uuidv4()
		this.notifications.set(id, notification)
		setTimeout(() => {
			this.notifications.delete(id)
		}, 5000)
	}
}

export const notificationHandlerStore = new NotificationStore()

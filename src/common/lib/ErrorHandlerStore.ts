import { makeAutoObservable } from 'mobx'
import { ErrorMessage } from '@/common'

export class ErrorHandlerStore {
	error: Set<ErrorMessage | unknown> = new Set()

	constructor() {
		makeAutoObservable(this)
	}

	get errorList() {
		const errors: ErrorMessage[] = []
		this.error.forEach((item) => errors.push(item as ErrorMessage))
		return errors
	}

	addError = (error: ErrorMessage) => {
		this.error.add(error)
		setTimeout(() => {
			this.error.delete(error)
		}, 5000)
	}
}

export const errorHandlerStore = new ErrorHandlerStore()

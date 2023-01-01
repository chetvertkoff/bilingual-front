import { observable, runInAction } from 'mobx'
import { ErrorMessage } from '@/common'

export interface ErrorHandler {
	error: Set<ErrorMessage | unknown>
	errorList: ErrorMessage[]
}

export const errorHandler = observable<ErrorHandler>({
	error: new Set(),

	get errorList() {
		const errors: ErrorMessage[] = []
		this.error.forEach((item) => errors.push(item as ErrorMessage))
		return errors
	},
})

const addError = (error: ErrorMessage) => {
	runInAction(() => {
		errorHandler.error.add(error)
		setTimeout(() => {
			errorHandler.error.delete(error)
		}, 5000)
	})
}

export const errorActions = {
	addError,
}

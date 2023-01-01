import { errorActions, ErrorMessage } from '@/common'

export const addErrorMessage = (message: string) => {
	errorActions.addError(new ErrorMessage(message))
}

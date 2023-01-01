import React, { useState } from 'react'
import { Alert, Snackbar } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { errorHandler } from '@/common'

export const ErrorsOutput = observer(() => {
	const [errorHandlerState] = useState(errorHandler)
	const { errorList } = errorHandlerState

	return (
		<>
			{errorList.map((errorMessage) => (
				<Snackbar
					key={errorMessage.message}
					anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
					open
					autoHideDuration={6000}
				>
					<Alert severity="error">{errorMessage.message}</Alert>
				</Snackbar>
			))}
		</>
	)
})

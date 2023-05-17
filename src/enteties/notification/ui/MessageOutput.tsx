import React from 'react'
import { Alert, Snackbar } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { notificationHandlerStore } from '@/enteties/notification'

export const MessageOutput = observer(() => {
	const { notificationList } = notificationHandlerStore

	return (
		<>
			{notificationList.map((item) => (
				<Snackbar
					key={item.message}
					anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
					open
					autoHideDuration={6000}
				>
					<Alert severity={item.type}>{item.message}</Alert>
				</Snackbar>
			))}
		</>
	)
})

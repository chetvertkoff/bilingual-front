import React from 'react'
import { Button } from '@mui/material'
import { bookUploadApi } from '../api'

export const BookUpload = () => {
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { files = [] } = e.target
		if (files?.length) {
			bookUploadApi.createBilingual(files[0])
			e.target.value = ''
		}
	}

	return (
		<Button variant="contained" component="label">
			Upload
			<input hidden accept="application/*" type="file" onChange={onChange} />
		</Button>
	)
}

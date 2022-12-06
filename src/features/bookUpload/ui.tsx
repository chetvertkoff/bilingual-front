import React, { useState } from 'react'
import { Button } from '@mui/material'
import { apiRequest, bookApi } from '@/common'

export const BookUpload = () => {
	const onChange = (e) => {
		bookApi.createBilingual(e.target.files[0])
	}

	return (
		<Button variant="contained" component="label">
			Upload
			<input hidden accept="application/*" type="file" onChange={onChange} />
		</Button>
	)
}

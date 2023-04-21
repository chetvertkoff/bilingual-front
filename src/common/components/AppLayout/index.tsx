import React, { FC } from 'react'
import './style.scss'
import { MessageOutput } from '@/common'
import { Box } from '@mui/material'

export const AppLayout: FC<{ children: JSX.Element }> = ({ children }) => (
	<Box sx={{ p: '10px' }}>
		<MessageOutput />
		{children}
	</Box>
)

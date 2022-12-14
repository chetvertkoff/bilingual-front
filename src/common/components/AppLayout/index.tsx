import React, { FC } from 'react'
import './style.scss'
import { ErrorsOutput } from '@/common'

export const AppLayout: FC<{ children: JSX.Element }> = ({ children }) => (
	<div>
		<ErrorsOutput />
		{children}
	</div>
)

import React, { FC } from 'react'
import './style.scss'
import { MessageOutput } from '@/common'

export const AppLayout: FC<{ children: JSX.Element }> = ({ children }) => (
	<div>
		<MessageOutput />
		{children}
	</div>
)

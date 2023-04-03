import React, { FC } from 'react'
import { MessageOutput } from '@/common'

export const BookReadLayout: FC<{ children: JSX.Element }> = ({ children }) => (
	<>
		<MessageOutput />
		{children}
	</>
)

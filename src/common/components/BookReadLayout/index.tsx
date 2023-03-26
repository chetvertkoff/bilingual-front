import React, { FC } from 'react'
import { ErrorsOutput } from '@/common'

export const BookReadLayout: FC<{ children: JSX.Element }> = ({ children }) => (
	<>
		<ErrorsOutput />
		{children}
	</>
)

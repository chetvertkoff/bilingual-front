import React, { FC, PropsWithChildren } from 'react'
import { Typography } from '@mui/material'
import { Variant } from '@mui/material/styles/createTypography'

interface Props extends PropsWithChildren {
	tagName: string
	fontSize: string
}
export const Heading: FC<Props> = ({ children, tagName, fontSize }) => {
	return (
		<Typography variant={tagName as Variant} sx={{ fontSize }}>
			{children}
		</Typography>
	)
}

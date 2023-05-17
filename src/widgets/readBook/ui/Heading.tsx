import React, { FC, PropsWithChildren } from 'react'
import { Typography } from '@mui/material'
import { Variant } from '@mui/material/styles/createTypography'

interface Props extends PropsWithChildren {
	tagName: string
}
export const Heading: FC<Props> = ({ children, tagName }) => {
	return <Typography variant={tagName as Variant}>{children}</Typography>
}

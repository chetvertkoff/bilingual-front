import React, { FC } from 'react'

interface Props {
	top?: number
	bottom?: number
	right?: number
	left?: number
	children: JSX.Element
}

export const Indent: FC<Props> = ({ top = 0, bottom = 0, left = 0, right = 0, children }) => {
	const style = {
		marginTop: `${top}px`,
		marginBottom: `${bottom}px`,
		marginLeft: `${left}px`,
		marginRight: `${right}px`,
	}

	return <div style={style}>{children}</div>
}

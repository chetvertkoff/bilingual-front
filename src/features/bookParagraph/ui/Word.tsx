import React, { FC, memo } from 'react'
import { Popover, Typography } from '@mui/material'
import { WordData } from '@/enteties/book/word'
import { useTranslate } from '../lib'

interface Props {
	word: WordData
	fontSize: string
}

export const Word: FC<Props> = memo(({ word: { text, needTranslate }, fontSize }) => {
	const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
	const { loading, translate, loadTranslate } = useTranslate()

	const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
		if (translate) return

		loadTranslate(text)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<span>
			<Popover
				open={Boolean(anchorEl)}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
				transformOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}
			>
				{loading ? 'Загрузка' : <Typography sx={{ p: 2, fontSize }}>{translate}</Typography>}
			</Popover>
			<span style={needTranslate ? { textDecoration: 'underline' } : {}} onClick={handleClick}>
				{text}
			</span>{' '}
		</span>
	)
})

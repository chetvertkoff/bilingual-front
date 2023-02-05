import React, { FC, useState } from 'react'
import { WordData } from '@/features/bookRead/lib'
import { Popover, Typography } from '@mui/material'
import { bookActions, bookState, translatedText, translatedTextState } from '@/enteties/book'
import { observer } from 'mobx-react-lite'

export const Word: FC<{ word: WordData }> = ({ word: { text, needTranslate } }) => {
	const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
	const [loading, setLoading] = useState(false)
	const [translate, setTranslate] = useState('')

	const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
		if (translate) return
		setLoading(true)
		const tr = await bookActions.loadTranslate(text)
		setTranslate(tr)
		setLoading(false)
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
				{loading ? 'Загрузка' : <Typography sx={{ p: 2 }}>{translate}</Typography>}
			</Popover>
			<span style={needTranslate ? { textDecoration: 'underline' } : {}} onClick={handleClick}>
				{text}
			</span>{' '}
		</span>
	)
}

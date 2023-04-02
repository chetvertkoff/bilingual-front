import React, { FC, memo, useState } from 'react'
import { Popover, Typography } from '@mui/material'
import { BookStore } from '@/enteties/book'
import { WordData } from '@/features/bookRead/utils/lib'

const { loadTranslate } = BookStore

export const Word: FC<{ word: WordData }> = memo(({ word: { text, needTranslate } }) => {
	const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
	const [loading, setLoading] = useState(false)
	const [translate, setTranslate] = useState('')

	const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
		if (translate) return
		setLoading(true)
		const tr = await loadTranslate(text)
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
})

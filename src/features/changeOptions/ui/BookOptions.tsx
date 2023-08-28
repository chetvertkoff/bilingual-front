import SettingsIcon from '@mui/icons-material/Settings'
import React from 'react'
import { bookOptionsStore } from '@/enteties/book/bookOptions'
import { Box, Button, Popover, Typography } from '@mui/material'
import { paragraphSizes } from '@/widgets/readBook/lib'
import { Indent } from '@/shared'
import { changeOptionsStore } from '../store'
import './styles.scss'

const { changeOptionFontSizeLevel } = changeOptionsStore

export const BookOptions = () => {
	const [anchorEl, setAnchorEl] = React.useState<SVGSVGElement | null>(null)
	const { options } = bookOptionsStore

	if (!options) return null

	const { fontSizeLevel } = options

	const increaseFontSize = () => {
		const level = fontSizeLevel + 1
		if (level > paragraphSizes.length - 1) return
		changeOptionFontSizeLevel(level)
	}

	const decreaseFontSize = () => {
		const level = fontSizeLevel - 1
		if (level < 0) return
		changeOptionFontSizeLevel(level)
	}

	return (
		<>
			<Popover
				open={Boolean(anchorEl)}
				anchorEl={anchorEl}
				onClose={() => setAnchorEl(null)}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
				transformOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}
			>
				<Box sx={{ minWidth: '250px' }} className="book-options">
					<Indent bottom={10}>
						<Typography variant="h5" align="center">
							Настройки
						</Typography>
					</Indent>

					<Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
						<Button
							sx={{ fontSize: '10px', minWidth: '45%' }}
							variant="contained"
							component="label"
							onClick={decreaseFontSize}
						>
							{' '}
							A
						</Button>
						<Button
							sx={{ minWidth: '45%' }}
							variant="contained"
							component="label"
							onClick={increaseFontSize}
						>
							A
						</Button>
					</Box>
				</Box>
			</Popover>

			<div style={{ position: 'fixed', bottom: 0 }}>
				<SettingsIcon
					sx={{ fontSize: 30 }}
					onClick={(e: React.MouseEvent<SVGSVGElement>) => setAnchorEl(e.currentTarget)}
				/>
			</div>
		</>
	)
}

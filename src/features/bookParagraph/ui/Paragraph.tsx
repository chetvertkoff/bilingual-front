import React, { FC, useState } from 'react'
import { Box, ClickAwayListener, Tooltip, Typography } from '@mui/material'
import { ParagraphModel } from '@/enteties/book/paragraph'
import GTranslateIcon from '@mui/icons-material/GTranslate'
import { splitParagraph } from '../lib'
import { Word } from './Word'
import './style.scss'

interface Props {
	originalText: ParagraphModel['originalText']
	translate: ParagraphModel['translate']
}

export const Paragraph: FC<Props> = ({ originalText, translate }) => {
	const [showTranslate, setShowTranslate] = useState(false)

	const splitTextCollection = splitParagraph(originalText)

	return (
		<div className="paragraph">
			<Box sx={{ display: 'flex' }}>
				<Box sx={{ mt: '10px', mb: '10px' }}>
					{splitTextCollection.map((word) => (
						<Word key={word.id} word={word} />
					))}
				</Box>
				<Box sx={{ p: '10px', display: 'flex', alignItems: 'center' }}>
					<ClickAwayListener onClickAway={() => setShowTranslate(false)}>
						<div>
							<Tooltip
								PopperProps={{
									disablePortal: true,
								}}
								arrow
								onClose={() => setShowTranslate(false)}
								open={showTranslate}
								disableFocusListener
								disableHoverListener
								disableTouchListener
								title={<Typography color="inherit">{translate}</Typography>}
								placement="top-start"
							>
								<div className="paragraph__icon" onClick={() => setShowTranslate(!showTranslate)}>
									<GTranslateIcon sx={{ fontSize: 20 }} />
								</div>
							</Tooltip>
						</div>
					</ClickAwayListener>
				</Box>
			</Box>
		</div>
	)
}

import React, { FC, useState } from 'react'
import { ParagraphModel } from '@/common'
import './style.scss'
import { Box, ClickAwayListener, Tooltip, Typography } from '@mui/material'
import { Word } from '@/features/bookRead/ui/Word'
import { splitParagraph } from '@/features/bookRead'

export const Paragraph: FC<{
	originalText: ParagraphModel['originalText']
	translate: ParagraphModel['translate']
}> = ({ originalText, translate }) => {
	const [showTranslate, setShowTranslate] = useState(false)

	const splitTextCollection = splitParagraph(originalText)

	return (
		<div className="paragraph">
			<Box sx={{ display: 'flex' }}>
				<Box sx={{ mt: '10px', mb: '10px' }}>
					{splitTextCollection.map((word) => (
						<Word word={word} />
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
									11
								</div>
							</Tooltip>
						</div>
					</ClickAwayListener>
				</Box>
			</Box>
		</div>
	)
}

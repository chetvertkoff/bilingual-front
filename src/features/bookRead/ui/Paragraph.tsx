import React, { FC, useState } from 'react'
import { ChapterFull, Indent } from '@/common'
import './style.scss'
import classNames from 'classnames'
import { Box, ClickAwayListener, Popover, Tooltip, Typography } from '@mui/material'
import { Word } from '@/features/bookRead/ui/Word'
import { splitParagraph } from '../lib'

export const Paragraph: FC<{ item: ChapterFull }> = ({ item: { originalText, translate } }) => {
	const [showTranslate, setShowTranslate] = useState(false)

	const splittedTextCollection = splitParagraph(originalText)

	return (
		<div className="paragraph">
			<Box sx={{ display: 'flex' }}>
				<Box sx={{ mt: '10px', mb: '10px' }}>
					{splittedTextCollection.map((word) => (
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

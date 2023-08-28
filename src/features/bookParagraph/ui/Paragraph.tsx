import React, { FC, useEffect, useState } from 'react'
import { Box, ClickAwayListener, Tooltip, Typography } from '@mui/material'
import { ParagraphModel } from '@/enteties/book/paragraph'
import GTranslateIcon from '@mui/icons-material/GTranslate'
import { splitParagraph } from '../lib'
import { Word } from './Word'
import './style.scss'

interface Props {
	originalText: ParagraphModel['originalText']
	translate: ParagraphModel['translate']
	fontSize: string
}

export const Paragraph: FC<Props> = ({ originalText, translate, fontSize }) => {
	const [showTranslate, setShowTranslate] = useState(false)
	const [renderFull, setRenderFull] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setRenderFull(true)
		}, 2000)
	}, [])

	if (!renderFull) return <Box sx={{ mt: '10px', mb: '10px', fontSize }}>{originalText}</Box>

	const splitTextCollection = splitParagraph(originalText)

	return (
		<div className="paragraph">
			<Box sx={{ display: 'flex' }}>
				<Box sx={{ mt: '10px', mb: '10px', fontSize }}>
					{splitTextCollection.map((word) => (
						<Word key={word.id} word={word} fontSize={fontSize} />
					))}
				</Box>
				<Box sx={{ pl: '10px', display: 'flex', alignItems: 'center' }}>
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
								title={
									<Typography sx={{ fontSize }} color="inherit">
										{translate}
									</Typography>
								}
							>
								<div className="paragraph__icon" onClick={() => setShowTranslate(!showTranslate)}>
									<GTranslateIcon sx={{ fontSize }} />
								</div>
							</Tooltip>
						</div>
					</ClickAwayListener>
				</Box>
			</Box>
		</div>
	)
}

import React, { forwardRef, useRef } from 'react'
import { Box } from '@mui/material'
import GTranslateIcon from '@mui/icons-material/GTranslate'

export const TextSizeHelper = forwardRef((props, ref) => {
	return (
		<div
			className="paragraph"
			ref={ref}
			style={{
				visibility: 'hidden',
				position: 'absolute',
				paddingRight: '10px',
				paddingLeft: '10px',
			}}
		>
			<Box sx={{ display: 'flex' }}>
				<Box sx={{ mt: '10px', mb: '10px' }} className="word" />
				<Box sx={{ pl: '10px', display: 'flex', alignItems: 'center' }}>
					<div className="paragraph__icon">
						<GTranslateIcon className="icon" />
					</div>
				</Box>
			</Box>
		</div>
	)
})

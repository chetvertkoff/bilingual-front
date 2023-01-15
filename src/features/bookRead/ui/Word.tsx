import React, { FC } from 'react'
import { WordData } from '@/features/bookRead/lib'

export const Word: FC<{ word: WordData }> = ({ word: { text, needTranslate } }) => {
	return (
		<span>
			<span style={needTranslate ? { textDecoration: 'underline' } : {}}>{text}</span>{' '}
		</span>
	)
}

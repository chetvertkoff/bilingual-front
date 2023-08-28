import React from 'react'
import { useParams } from 'react-router-dom'
import { BookRead } from '@/widgets/readBook'
import { Box } from '@mui/material'
import GTranslateIcon from '@mui/icons-material/GTranslate'

const Book = () => {
	const { id } = useParams()

	if (!id) return null

	return <BookRead bookId={id} />
}
export default Book

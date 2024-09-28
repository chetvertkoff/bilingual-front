import React from 'react'
import { useParams } from 'react-router-dom'
import { BookRead } from '@/widgets/readBook'

const Book = () => {
	const { id } = useParams()

	if (!id) return null

	return <BookRead bookId={id} />
}
export default Book

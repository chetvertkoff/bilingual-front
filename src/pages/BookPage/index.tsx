import React from 'react'
import { useParams } from 'react-router-dom'
import { Layouts, withLayout } from '@/common'
import { BookRead } from '@/features/bookRead'

const Book = () => {
	const { id } = useParams()

	if (!id) return null

	return <BookRead bookId={id} />
}
export default withLayout(Book, Layouts.BOOK_READ)

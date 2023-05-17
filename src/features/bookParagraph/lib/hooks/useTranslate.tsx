import { useState } from 'react'
import { bookParagraphApi } from '../../api'

export const useTranslate = () => {
	const [loading, setLoading] = useState(false)
	const [translate, setTranslate] = useState('')

	const loadTranslate = async (text: string) => {
		setLoading(true)
		const tr = await bookParagraphApi.getTranslate(text)
		setTranslate(tr)
		setLoading(false)
	}

	return { loading, translate, loadTranslate }
}

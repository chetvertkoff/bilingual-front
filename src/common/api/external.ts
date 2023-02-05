import { apiRequest, urls } from '@/common'
import axios from 'axios'

const getTranslate = async (text: string) => {
	const res = await apiRequest.get(`${urls.book.getTranslate}?text=${text}`)
	console.log(res.data)
	return res.data
}

export const externalApi = { getTranslate }

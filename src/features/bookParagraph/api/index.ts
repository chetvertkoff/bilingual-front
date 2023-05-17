import { apiRequest, urls } from '@/shared'

export const bookParagraphApi = {
	getTranslate: async (text: string) => {
		const res = await apiRequest.get(`${urls.book.getTranslate}?text=${text}`)
		return res.data
	},
}

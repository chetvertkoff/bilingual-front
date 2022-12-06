import { apiRequest, BookModel } from '@/common'

const createBilingual = async (file: any) => {
	const res = await apiRequest.post<BookModel>('/book/create-bilingual?userId=15', file, {
		headers: { 'Content-Type': `application/*` },
	})
	return res.data
}

export const bookApi = { createBilingual }

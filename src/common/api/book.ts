import { apiRequest, Book, SimpleResponse } from '@/common'
import { urls } from './urls'

const createBilingual = async (file: any) => {
	const res = await apiRequest.post<SimpleResponse>(urls.book.createBilingual, file, {
		headers: { 'Content-Type': `application/*` },
	})
	return res.data
}

const getBilingual = async (id: number) => {
	const res = await apiRequest.get<Book>(urls.book.getBilingual.replace(':id', String(id)))
	return res.data
}

const getBilingualItems = async () => {
	const res = await apiRequest.get<Book[]>(urls.book.getBilinguals)
	return res.data
}

export const bookApi = { createBilingual, getBilingual, getBilingualItems }

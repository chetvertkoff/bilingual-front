import { apiRequest, SimpleResponse, urls } from '@/shared'

export const bookUploadApi = {
	createBilingual: async (file: any) => {
		const res = await apiRequest.post<SimpleResponse>(urls.book.createBilingual, file, {
			headers: { 'Content-Type': `application/*` },
		})
		return res.data
	},
}

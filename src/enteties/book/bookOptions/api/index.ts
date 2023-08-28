import { BookOptions } from '@/enteties/book/bookOptions'
import { apiRequest, urls } from '@/shared'

export const bookOptionsApi = {
	getOptions: async () => {
		const res = await apiRequest.get<BookOptions>(urls.user.bookOptions)
		return res.data
	},
	saveOptions: async (options: BookOptions) => {
		const res = await apiRequest.patch<BookOptions>(urls.user.bookOptions, options)
		return res.data
	},
}

import { apiRequest, BaseRequestParams, ResponseCatalog, urls } from '@/shared'
import { BookModel } from '../models'

export const bookListApi = {
	getBooks: async (params: BaseRequestParams) => {
		const res = await apiRequest.get<ResponseCatalog<BookModel>>(urls.book.getBooks, { params })
		return res.data
	},
}

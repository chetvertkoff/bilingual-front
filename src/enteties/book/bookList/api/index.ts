import { apiRequest, BaseRequestParams, BookModel, ResponseCatalog, urls } from '@/shared'

export const bookListApi = {
	getBooks: async (params: BaseRequestParams) => {
		const res = await apiRequest.get<ResponseCatalog<BookModel>>(urls.book.getBooks, { params })
		return res.data
	},
}

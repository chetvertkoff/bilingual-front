import { apiRequest, BaseRequestParams, ResponseCatalogWithSlice, urls } from '@/shared'
import { ParagraphModel } from '../types'

export const paragraphsApi = {
	getParagraphs: async (params: BaseRequestParams) => {
		const res = await apiRequest.get<ResponseCatalogWithSlice<ParagraphModel>>(
			urls.book.getParagraph,
			{
				params,
			}
		)
		return res.data
	},
}

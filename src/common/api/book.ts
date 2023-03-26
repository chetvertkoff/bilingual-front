import {
	apiRequest,
	BaseRequestParams,
	BookModel,
	ChapterModel,
	ParagraphModel,
	SimpleResponse,
} from '@/common'
import { ResponseCatalog } from '@/common/types/ResponseCatalog'
import { ResponseCatalogWithSlice } from '@/common/types/ResponseCatalogWithSlice'
import { urls } from './urls'

export const bookApi = {
	createBilingual: async (file: any) => {
		const res = await apiRequest.post<SimpleResponse>(urls.book.createBilingual, file, {
			headers: { 'Content-Type': `application/*` },
		})
		return res.data
	},

	getBook: async (id: number) => {
		const res = await apiRequest.get<BookModel>(urls.book.getBook.replace(':id', String(id)))
		return res.data
	},

	getBooks: async () => {
		const res = await apiRequest.get<BookModel[]>(urls.book.getBooks)
		return res.data
	},

	getChapter: async (params: BaseRequestParams) => {
		const res = await apiRequest.get<ResponseCatalogWithSlice<ChapterModel>>(
			urls.book.getChapters,
			{
				params,
			}
		)
		return res.data
	},

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

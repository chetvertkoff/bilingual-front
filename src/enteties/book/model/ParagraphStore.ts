import { makeAutoObservable, toJS } from 'mobx'
import { apiRequest, BaseRequestParams, bookApi, ChapterModel, ParagraphModel } from '@/common'
import { bookStore, BookStore } from '@/enteties/book'

class ParagraphStore {
	loading = false
	paragraphs: ParagraphModel[] = []
	firstParagraph: ParagraphModel | null = null
	lastParagraph: ParagraphModel | null = null

	constructor() {
		makeAutoObservable(this)
	}

	loadParagraphsByParams = async <T extends BaseRequestParams>(params: T, clear?: boolean) => {
		try {
			this.loading = true
			const res = await bookApi.getParagraphs(params)
			this.paragraphs = clear ? res.entries : [...toJS(this.paragraphs), ...res.entries]
			this.firstParagraph = res.first
			this.lastParagraph = res.last
		} finally {
			this.loading = false
		}
	}

	async loadChaptersWithParagraphs() {
		try {
		} catch (e) {}
	}
}

export const paragraphStore = new ParagraphStore()

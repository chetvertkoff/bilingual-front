import { makeAutoObservable, toJS } from 'mobx'
import { BaseRequestParams, bookApi, ParagraphModel } from '@/common'

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

	clearStore = () => {
		this.loading = false
		this.paragraphs = []
		this.firstParagraph = null
		this.lastParagraph = null
	}
}

export const paragraphStore = new ParagraphStore()

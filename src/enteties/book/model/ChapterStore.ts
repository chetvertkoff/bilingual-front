import { makeAutoObservable, makeObservable, runInAction } from 'mobx'
import { apiRequest, BaseRequestParams, bookApi, ChapterModel, ParagraphModel } from '@/common'
import { bookStore, BookStore } from '@/enteties/book'

class ChapterStore {
	loading = false
	chapters: ChapterModel[] = []

	constructor() {
		makeAutoObservable(this)
	}

	loadChaptersByParams = async <T extends BaseRequestParams>(params: T, clear?: boolean) => {
		try {
			this.loading = true

			const res = await bookApi.getChapter(params)
			this.chapters = clear ? res.entries : [...this.chapters, ...res.entries]
		} finally {
			this.loading = false
		}
	}
}

export const chapterStore = new ChapterStore()

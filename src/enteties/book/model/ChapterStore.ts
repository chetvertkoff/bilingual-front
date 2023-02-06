import { makeAutoObservable } from 'mobx'
import { ChapterFullModel } from '@/common'
import { bookStore, BookStore } from '@/enteties/book'

class ChapterStore {
	bookStore: null | BookStore = null

	constructor(bookStore: BookStore) {
		makeAutoObservable(this)
		this.bookStore = bookStore
	}

	get chapterParagraphs(): ChapterFullModel[] {
		const chapters = this.bookStore?.book?.chapters ?? []
		if (!chapters[0]?.chaptersFull?.length || !chapters[0]?.id) return []
		return chapters.flatMap((ch) => ch.chaptersFull?.flatMap((chFull) => chFull) ?? [])
	}
}

export const chapterStore = new ChapterStore(bookStore)

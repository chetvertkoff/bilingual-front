import { Chapter, ChapterFull } from '@/common'

export class Reader {
	constructor(public chapters: Chapter[] = []) {}

	public get chapterParagraphs(): ChapterFull[] {
		if (!this.chapters[0]?.chaptersFull?.length || !this.chapters[0]?.id) return []
		return this.chapters.flatMap((ch) => ch.chaptersFull?.flatMap((chFull) => chFull) ?? [])
	}
}

export interface WordData {
	text: string
	needTranslate: boolean
}

const validateWord = (text: string) => {
	if (text.length < 3 || /\d/.test(text)) return false
	return true
}

export const splitParagraph = (paragraph: string): WordData[] => {
	return paragraph.split(' ').map((text) => ({
		text,
		needTranslate: validateWord(text),
	}))
}

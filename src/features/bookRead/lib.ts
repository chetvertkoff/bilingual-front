import { Chapter } from '@/common'

export class Reader {
	constructor(public chapters: Chapter[] = []) {}

	public generateHtmlPage() {
		if (!this.chapters[0]?.chaptersFull?.length || !this.chapters[0]?.id) return null

		const wrapper = document.createElement('div')
		this.chapters.forEach((ch) => {
			ch.chaptersFull?.forEach((chFull) => {
				const element = document.createElement(chFull.tagName)
				element.innerHTML = chFull.originalText
				wrapper.append(element)
			})
		})
		return wrapper.outerHTML
	}
}

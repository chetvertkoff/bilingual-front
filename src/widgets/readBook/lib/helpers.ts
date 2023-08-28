import { bookReadTypography } from '@/widgets/readBook/lib/constants'
import { ParagraphModel } from '@/enteties/book/paragraph'

export const getEstimateSize = (
	item: ParagraphModel,
	fontSizeLevel: number,
	node: HTMLDivElement | null
) => {
	if (node) {
		const w = node.querySelector('.word') as HTMLElement
		const c = node.querySelector('.icon') as HTMLElement
		const tag = document.createElement(item.tagName)
		tag.style.cssText = `
					font-size: ${bookReadTypography[item.tagName][fontSizeLevel]}
				`
		c.style.cssText = `
					font-size: ${bookReadTypography[item.tagName][fontSizeLevel]}
				`
		tag.innerText = item.originalText
		w.appendChild(tag)

		const res = node.clientHeight
		tag.removeAttribute('style')
		c.removeAttribute('style')
		w.innerHTML = ''
		return res
	}
	return 90
}

import { WordData } from '@/features/bookRead'

const validateWord = (text: string) => {
	return /[a-zA-Z]+/g.test(text)
}

export const splitParagraph = (paragraph: string): WordData[] => {
	return paragraph.split(' ').map((text) => ({
		text,
		needTranslate: validateWord(text),
	}))
}

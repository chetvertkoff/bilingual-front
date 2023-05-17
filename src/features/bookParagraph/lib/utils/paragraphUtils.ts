import { v4 as uuidv4 } from 'uuid'
import { WordData } from '@/enteties/book/word'

const validateWord = (text: string) => {
	return /[a-zA-Z]+/g.test(text)
}

export const splitParagraph = (paragraph: string): WordData[] => {
	return paragraph.split(' ').map((text) => ({
		id: uuidv4(),
		text,
		needTranslate: validateWord(text),
	}))
}

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

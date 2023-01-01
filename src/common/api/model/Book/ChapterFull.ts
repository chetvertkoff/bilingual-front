import { BaseModel } from '../BaseModel'

export class ChapterFull extends BaseModel {
	constructor(
		public id?: number,
		public createdDate: string = '',
		public originalText: string = '',
		public translate: string = '',
		public tagName: string = ''
	) {
		super(id, createdDate)
		this.originalText = originalText
		this.translate = translate
		this.tagName = tagName
	}
}

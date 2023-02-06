import { BaseModel } from '../BaseModel'

export class ChapterFullModel extends BaseModel {
	constructor(
		public id?: number,
		public createdDate = '',
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

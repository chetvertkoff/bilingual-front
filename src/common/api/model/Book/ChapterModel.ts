import { ChapterFullModel } from '@/common'
import { BaseModel } from '../BaseModel'

export class ChapterModel extends BaseModel {
	constructor(
		public id?: number,
		public createdDate?: string,
		public name?: string,
		public chaptersFull?: ChapterFullModel[]
	) {
		super(id, createdDate)
		this.name = name ?? ''
		this.chaptersFull = chaptersFull ?? [new ChapterFullModel()]
	}
}

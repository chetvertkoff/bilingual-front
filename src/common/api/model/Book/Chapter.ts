import { ChapterFull } from '@/common'
import { BaseModel } from '../BaseModel'

export class Chapter extends BaseModel {
	constructor(
		public id?: number,
		public createdDate?: string,
		public name?: string,
		public chaptersFull?: ChapterFull[]
	) {
		super(id, createdDate)
		this.name = name ?? ''
		this.chaptersFull = chaptersFull ?? [new ChapterFull()]
	}
}

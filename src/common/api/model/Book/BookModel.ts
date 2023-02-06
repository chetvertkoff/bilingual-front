import { ChapterModel } from '@/common'
import { BaseModel } from '../BaseModel'

export class BookModel extends BaseModel {
	constructor(public id?: number, public createdDate?: string, public chapters?: ChapterModel[]) {
		super(id, createdDate)
		this.chapters = chapters ?? [new ChapterModel()]
	}
}

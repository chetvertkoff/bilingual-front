import { Chapter } from '@/common'
import { BaseModel } from '../BaseModel'

export class Book extends BaseModel {
	constructor(public id?: number, public createdDate?: string, public chapters?: Chapter[]) {
		super(id, createdDate)
		this.chapters = chapters ?? [new Chapter()]
	}
}

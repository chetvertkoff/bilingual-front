import { BaseModel } from './BaseModel'

export interface BookModel extends BaseModel {
	progress: number
	cover: string | null
}

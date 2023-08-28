import { BaseModel } from '@/shared'

export interface BookModel extends BaseModel {
	progress: number
	cover: string | null
}

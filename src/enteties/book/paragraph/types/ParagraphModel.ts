import { BaseModel } from '@/shared'
import { TagNames } from '@/enteties/book/paragraph/utils'

export interface ParagraphModel extends BaseModel {
	originalText: string
	translate: string
	tagName: TagNames
}

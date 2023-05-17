import { BaseModel } from '@/shared'

export interface ParagraphModel extends BaseModel {
	originalText: string
	translate: string
	tagName: string
}

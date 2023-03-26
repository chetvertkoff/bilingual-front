import { BaseModel } from '../BaseModel'

export interface ParagraphModel extends BaseModel {
	originalText: string
	translate: string
	tagName: string
}

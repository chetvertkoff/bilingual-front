import { BaseParamsProps } from '@/shared'

export interface ParagraphParamsProps extends BaseParamsProps {
	chapter_id?: string
	book_id?: string
	id_more_than?: string
	id_more_than_or_equal?: string
	id_less_than?: string
	id_less_than_or_equal?: string
}

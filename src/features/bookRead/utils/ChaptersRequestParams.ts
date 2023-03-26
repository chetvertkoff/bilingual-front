import { BaseParamsProps, BaseRequestParams } from '@/common'

export interface ChapterParamsProps extends BaseParamsProps {
	book_id?: string
	id_more_than?: string
	id_more_than_or_equal?: string
	id_less_than?: string
	id_less_than_or_equal?: string
}

export class ChaptersRequestParams extends BaseRequestParams {
	book_id?: string
	id_more_than?: string
	id_more_than_or_equal?: string
	id_less_than?: string
	id_less_than_or_equal?: string

	constructor(props: ChapterParamsProps) {
		super(props)
		this.book_id = props.book_id
		this.id_more_than = props.id_more_than
		this.id_more_than_or_equal = props.id_more_than_or_equal
		this.id_less_than = props.id_less_than
		this.id_less_than_or_equal = props.id_less_than_or_equal
	}
}

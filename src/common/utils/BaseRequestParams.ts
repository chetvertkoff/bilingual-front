export interface BaseParamsProps {
	id?: string
	skip?: number
	take?: number
	order?: 'ASC' | 'DESC'
}

export class BaseRequestParams {
	public readonly id?: string
	public readonly skip?: number
	public readonly take?: number
	public readonly order?: 'ASC' | 'DESC'

	constructor(props: BaseParamsProps = {}) {
		this.id = props.id
		this.skip = props.skip ?? 0
		this.take = props.take ?? 30
		this.order = props.order ?? 'ASC'
	}
}

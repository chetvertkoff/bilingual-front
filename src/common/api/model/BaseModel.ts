export class BaseModel {
	constructor(public id?: number, public createdDate?: string) {
		this.id = id
		this.createdDate = createdDate
	}
}

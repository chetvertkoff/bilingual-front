import { makeAutoObservable } from 'mobx'

export class BaseStore<T> {
	protected initialState: T

	public state: T

	constructor(state: T) {
		this.state = state
		this.initialState = state
		makeAutoObservable(this)
	}

	protected updateStoreValue<K extends keyof T>(key: K, value: T[K]) {
		this.state[key] = value
	}

	protected clearStore() {
		this.state = this.initialState
	}
}

import { makeAutoObservable } from 'mobx'

class ReadBook {
	windowHeight = window.innerHeight

	constructor() {
		makeAutoObservable(this)
	}

	changeWindowHeight = (height: number) => {
		this.windowHeight = height
	}
}
export const readBookStore = new ReadBook()

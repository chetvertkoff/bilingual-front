import { Storage } from '@/shared'

export class LocalStorage {
	private readonly storageName = 'bilingualStorage'

	getStorage(): Storage {
		return JSON.parse(window.localStorage.getItem(this.storageName) ?? '{}')
	}

	setStorage(storage: Storage) {
		window.localStorage.setItem(
			this.storageName,
			JSON.stringify({ ...storage, ...this.getStorage() })
		)
	}
}

export const appLocalStorage = new LocalStorage()

import { ResponseCatalog } from '@/common'

export interface ResponseCatalogWithSlice<T> extends ResponseCatalog<T> {
	first: T
	last: T
}

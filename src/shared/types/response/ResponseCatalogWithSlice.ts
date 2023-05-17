import { ResponseCatalog } from './ResponseCatalog'

export interface ResponseCatalogWithSlice<T> extends ResponseCatalog<T> {
	first: T
	last: T
}

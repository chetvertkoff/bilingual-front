import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PageUrls } from '@/common'

const BooksPage = lazy(() => import('./BooksPage'))
const BookPage = lazy(() => import('./BookPage'))

export const PageRoutes = () => (
	<BrowserRouter>
		<Routes>
			<Route
				element={
					<Suspense fallback={null}>
						<BookPage />
					</Suspense>
				}
				// path="/book"
				path={PageUrls.book.bookPage}
			/>
			<Route
				element={
					<Suspense fallback={null}>
						<BooksPage />
					</Suspense>
				}
				// path="/books"
				path="/"
			/>
			<Route element={<div>404</div>} path="*" />
		</Routes>
	</BrowserRouter>
)

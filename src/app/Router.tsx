import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PageUrls } from '@/shared'
import { BaseLayout } from './layouts'

const BooksPage = lazy(() => import('../pages/BooksPage'))
const BookPage = lazy(() => import('../pages/BookPage'))

export const Router = () => (
	<BrowserRouter>
		<Routes>
			<Route element={<BaseLayout />}>
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
			</Route>

			<Route>
				{/* <Route element={<Auth />} path="/auth" />*/}
				<Route element={<div>404</div>} path="*" />
			</Route>
		</Routes>
	</BrowserRouter>
)

import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const BookPage = lazy(() => import('./books'))

export const PageRoutes = () => (
	<BrowserRouter>
		<Routes>
			<Route
				element={
					<Suspense fallback={null}>
						<BookPage />
					</Suspense>
				}
				path="/book"
			/>
			<Route element={<div>404</div>} path="*" />
		</Routes>
	</BrowserRouter>
)

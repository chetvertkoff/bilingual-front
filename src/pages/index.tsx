import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppLayout } from '@/common'

const BookPage = lazy(() => import('./Books'))

export const PageRoutes = () => (
	<AppLayout>
		<BrowserRouter>
			<Routes>
				<Route
					element={
						<Suspense fallback={null}>
							<BookPage />
						</Suspense>
					}
					// path="/book"
					path="/"
				/>
				<Route element={<div>404</div>} path="*" />
			</Routes>
		</BrowserRouter>
	</AppLayout>
)

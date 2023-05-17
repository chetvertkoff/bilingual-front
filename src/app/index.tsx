import React from 'react'
import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from './ErrorBoundary'
import { Router } from './Router'
import './style/index.scss'

const App = () => {
	return (
		<ErrorBoundary>
			<Router />
		</ErrorBoundary>
	)
}

createRoot(document.getElementById('root')!).render(<App />)

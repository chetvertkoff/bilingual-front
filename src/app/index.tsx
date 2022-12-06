import React from 'react'
import { PageRoutes } from '@/pages'
import { createRoot } from 'react-dom/client'
import './style/index.scss'

const App = () => {
	return <PageRoutes />
}

createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)

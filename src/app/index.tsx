import React from 'react'
import { PageRoutes } from '@/pages'
import { createRoot } from 'react-dom/client'
import './style/index.scss'
import { withProviders } from '@/app/HOC/withProviders'
// TODO добавить NotificationModel	Boundury HOC
// обработчик всех ошибок
const App = withProviders(() => {
	return <PageRoutes />
})

createRoot(document.getElementById('root')!).render(<App />)

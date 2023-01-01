import React, { ComponentType } from 'react'
import { ErrorBoundary } from '@/common/components/ErrorBoundary'

export const withErrorHandler =
	<T extends {} = {}>(Component: ComponentType<T>) =>
	(props: T) =>
		(
			<ErrorBoundary>
				<Component {...(props as T)} />
			</ErrorBoundary>
		)

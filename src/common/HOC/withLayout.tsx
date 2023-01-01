import React, { ComponentType } from 'react'
import { AppLayout, BookReadLayout } from '@/common'

export enum Layouts {
	APP,
	BOOK_READ,
}

const LayoutComponents = {
	[Layouts.APP]: AppLayout,
	[Layouts.BOOK_READ]: BookReadLayout,
}

export const withLayout =
	<T extends {} = {}>(Component: ComponentType<T>, layout: Layouts) =>
	(props: T) => {
		const Layout = LayoutComponents[layout]

		return (
			<Layout>
				<Component {...(props as T)} />
			</Layout>
		)
	}

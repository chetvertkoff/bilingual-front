import React from 'react'

interface Props {
	children?: React.ReactNode
}

interface State {
	hasError: boolean
}

export class ErrorBoundary extends React.Component<Props, State> {
	static getDerivedStateFromError() {
		return { hasError: true }
	}

	constructor(props: Props) {
		super(props)
		this.state = { hasError: false }
	}

	render() {
		if (this.state.hasError) {
			// TODO поменять на страницу ошибки
			return <h1>Something went wrong.</h1>
		}

		return this.props.children
	}
}

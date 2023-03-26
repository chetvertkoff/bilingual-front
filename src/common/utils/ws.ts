export const ws = () => {
	const exampleSocket = new WebSocket('ws://localhost:27800/?userId=15')

	exampleSocket.onmessage = (event) => {
		console.log(event.data)
	}

	exampleSocket.onopen = (event) => {
		console.log('open')
	}

	exampleSocket.onclose = (event) => {
		console.log('close')
	}

	return exampleSocket
}

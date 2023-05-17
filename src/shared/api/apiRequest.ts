import axios from 'axios'

const axiosInstance = axios.create({
	baseURL: 'http://localhost:4000/api/v1/',
	headers: {
		// TODO поменять после добавления авторизации
		UserId: 15,
	},
})

export const apiRequest = axiosInstance

import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.REACT_APP_API,
	withCredentials: true,
})

export default instance;
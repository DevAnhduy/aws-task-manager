import axios from 'axios';

export const axiosClient = axios.create({
	baseURL: `${process.env.API_URL || ''}/api`,
});

axiosClient.interceptors.request.use(
	function (config) {
		return config;
	},
	function (error) {
		return Promise.reject(error);
	},
);

axiosClient.interceptors.response.use(
	function (response) {
		return response;
	},
	function (error) {
		return Promise.reject(error);
	},
);

export const setToken = (token: string) => {
	axiosClient.defaults.headers['Authorization'] = `Bearer ${token}`;
};

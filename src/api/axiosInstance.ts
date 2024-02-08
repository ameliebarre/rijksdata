import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;
const apiLanguage = import.meta.env.VITE_API_LANGUAGE;

const config: AxiosRequestConfig = {
  baseURL: `${apiUrl}/${apiLanguage}`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
}

const axiosInstance: AxiosInstance = axios.create(config);

axiosInstance.interceptors.request.use(
  (config: any) => config,
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default axiosInstance;
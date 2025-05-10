import { AxiosInstance } from 'axios';

export const setupInterceptors = (instance: AxiosInstance) => {
  // Request interceptor
  instance.interceptors.request.use(
    (config) => {
      //   const token = getAuthToken();
      //   if (token) {
      //     config.headers.Authorization = `Bearer ${token}`;
      //   }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  // Response interceptor
  instance.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  return instance;
};

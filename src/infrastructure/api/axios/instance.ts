import axios from 'axios';
import { API_CONFIG } from '../config/api-config';
import { setupInterceptors } from './interceptors';
import { handleApiError } from './error-handler';

const axiosInstance = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: API_CONFIG.HEADERS,
});

setupInterceptors(axiosInstance);

export const api = {
  get: async <T>(url: string, params?: any): Promise<T> => {
    try {
      return await axiosInstance.get(url, { params });
    } catch (error) {
      throw handleApiError(error);
    }
  },
  post: async <T>(url: string, data?: any): Promise<T> => {
    try {
      return await axiosInstance.post(url, data);
    } catch (error) {
      throw handleApiError(error);
    }
  },
  put: async <T>(url: string, data?: any): Promise<T> => {
    try {
      return await axiosInstance.put(url, data);
    } catch (error) {
      throw handleApiError(error);
    }
  },
  delete: async <T>(url: string): Promise<T> => {
    try {
      return await axiosInstance.delete(url);
    } catch (error) {
      throw handleApiError(error);
    }
  },
};

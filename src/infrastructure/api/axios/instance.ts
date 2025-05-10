import axios from 'axios';
import { API_CONFIG } from '../config/api-config';
import { setupInterceptors } from './interceptors';
import { handleApiError } from './error-handler';
import {
  ApiResponse,
  CustomAxiosError,
  QueryParams,
  RequestBody,
} from '../types';

const axiosInstance = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: API_CONFIG.HEADERS,
});

setupInterceptors(axiosInstance);

export const api = {
  get: async <T>(
    url: string,
    params?: QueryParams,
  ): Promise<ApiResponse<T>> => {
    try {
      return await axiosInstance.get(url, { params });
    } catch (error) {
      throw handleApiError(error as CustomAxiosError);
    }
  },
  post: async <T>(url: string, data?: RequestBody): Promise<ApiResponse<T>> => {
    try {
      return await axiosInstance.post(url, data);
    } catch (error) {
      throw handleApiError(error as CustomAxiosError);
    }
  },
  put: async <T>(url: string, data?: RequestBody): Promise<ApiResponse<T>> => {
    try {
      return await axiosInstance.put(url, data);
    } catch (error) {
      throw handleApiError(error as CustomAxiosError);
    }
  },
  delete: async <T>(url: string): Promise<ApiResponse<T>> => {
    try {
      return await axiosInstance.delete(url);
    } catch (error) {
      throw handleApiError(error as CustomAxiosError);
    }
  },
};

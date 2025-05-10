import { AxiosError } from 'axios';

export interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
}

export interface ApiError {
  message: string;
  code: string;
  status: number;
}

export type CustomAxiosError = AxiosError<ApiError>;

import { toast } from 'sonner';
import { ApiError } from '../types/api-response';

export const handleApiError = (error: any): ApiError => {
  const defaultError: ApiError = {
    message: 'Something went wrong',
    code: 'UNKNOWN_ERROR',
    status: 500,
  };

  if (!error.response) {
    toast.error('Network error. Please check your connection.');
    return {
      ...defaultError,
      message: 'Network error',
      code: 'NETWORK_ERROR',
    };
  }

  const { status } = error.response;
  let message = error.response?.data?.message || defaultError.message;

  switch (status) {
    case 401:
      message = 'Unauthorized. Please login again.';
      toast.error(message);
      // Add logic to redirect to login or refresh token
      break;
    case 403:
      message = "You don't have permission to perform this action";
      toast.error(message);
      break;
    case 404:
      message = 'Resource not found';
      toast.error(message);
      break;
    case 422:
      message = 'Validation error';
      toast.error(message);
      break;
    default:
      toast.error(message);
  }

  return {
    message,
    code: error.response?.data?.code || defaultError.code,
    status,
  };
};

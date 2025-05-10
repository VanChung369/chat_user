import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0, // 0 seconds
      retry: 1,
      refetchOnWindowFocus: false,
      gcTime: 1000 * 60 * 5, // 5 minutes
    },
    mutations: {
      retry: 1,
    },
  },
});

// query keys definition
export const queryKeys = {
  users: ['users'],
};

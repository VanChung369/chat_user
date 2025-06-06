import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../config/query.config';

export const useQueryUsers = () => {
  return useQuery({
    queryKey: queryKeys.users,
    queryFn: () => {
      return 'user';
    },
  });
};

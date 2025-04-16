import { useQuery } from '@tanstack/react-query';
import { mockTrends, Trend } from './utils';

// Query keys
export const queryKeys = {
  trends: ['trends'] as const,
};

const fetchTrends = async (): Promise<Trend[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockTrends;
};

export function useTrends() {
  return useQuery({
    queryKey: queryKeys.trends,
    queryFn: fetchTrends
  });
}
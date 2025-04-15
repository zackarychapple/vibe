import { useQuery } from '@tanstack/react-query';
import { mockUsers, mockTrends, mockNavigationItems, User, Tweet, Trend, NavigationItem } from './utils';

// Query keys
export const queryKeys = {
  users: ['users'] as const,
  user: (id: string) => ['users', id] as const,
  tweets: ['tweets'] as const,
  tweet: (id: string) => ['tweets', id] as const,
  trends: ['trends'] as const,
  navigationItems: ['navigation-items'] as const,
};

const fetchUser = async (id: string): Promise<User | undefined> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockUsers.find(user => user.id === id);
};

const fetchTrends = async (): Promise<Trend[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockTrends;
};

const fetchNavigationItems = async (): Promise<NavigationItem[]> => {
  await new Promise(resolve => setTimeout(resolve, 200));
  return mockNavigationItems;
};

export function useUser(id: string) {
  return useQuery({
    queryKey: queryKeys.user(id),
    queryFn: () => fetchUser(id),
    enabled: !!id
  });
}

export function useTrends() {
  return useQuery({
    queryKey: queryKeys.trends,
    queryFn: fetchTrends
  });
}

export function useNavigationItems() {
  return useQuery({
    queryKey: queryKeys.navigationItems,
    queryFn: fetchNavigationItems
  });
}

// Helper function to resolve user data for a tweet
export function getUserForTweet(tweet: Tweet, users: User[]): User | undefined {
  return users.find(user => user.id === tweet.userId);
}

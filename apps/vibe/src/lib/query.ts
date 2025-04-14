import { useQuery } from '@tanstack/react-query';
import { mockTweets, mockUsers, mockTrends, mockNavigationItems, User, Tweet, Trend, NavigationItem } from './utils';

// Query keys
export const queryKeys = {
  users: ['users'] as const,
  user: (id: string) => ['users', id] as const,
  tweets: ['tweets'] as const,
  tweet: (id: string) => ['tweets', id] as const,
  trends: ['trends'] as const,
  navigationItems: ['navigation-items'] as const,
};

// Query functions
const fetchUsers = async (): Promise<User[]> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockUsers;
};

const fetchUser = async (id: string): Promise<User | undefined> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockUsers.find(user => user.id === id);
};

const fetchTweets = async (): Promise<Tweet[]> => {
  await new Promise(resolve => setTimeout(resolve, 800));
  return mockTweets;
};

const fetchTweet = async (id: string): Promise<Tweet | undefined> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockTweets.find(tweet => tweet.id === id);
};

const fetchTrends = async (): Promise<Trend[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockTrends;
};

const fetchNavigationItems = async (): Promise<NavigationItem[]> => {
  await new Promise(resolve => setTimeout(resolve, 200));
  return mockNavigationItems;
};

// Custom hooks
export function useUsers() {
  return useQuery({
    queryKey: queryKeys.users,
    queryFn: fetchUsers
  });
}

export function useUser(id: string) {
  return useQuery({
    queryKey: queryKeys.user(id),
    queryFn: () => fetchUser(id),
    enabled: !!id
  });
}

export function useTweets() {
  return useQuery({
    queryKey: queryKeys.tweets,
    queryFn: fetchTweets
  });
}

export function useTweet(id: string) {
  return useQuery({
    queryKey: queryKeys.tweet(id),
    queryFn: () => fetchTweet(id),
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
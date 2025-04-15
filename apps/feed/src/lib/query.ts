import { useQuery } from '@tanstack/react-query';
import { mockTweets, mockUsers, User, Tweet } from './utils';

// Query keys
export const queryKeys = {
  users: ['users'] as const,
  user: (id: string) => ['users', id] as const,
  tweets: ['tweets'] as const,
  tweet: (id: string) => ['tweets', id] as const,
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

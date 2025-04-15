import { useQuery } from '@tanstack/react-query';

// Mock data for user - This can be expanded later
export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  verified: boolean;
  bio?: string;
  followers: number;
  following: number;
}

// Query keys
export const queryKeys = {
  user: (id: string) => ['users', id] as const,
};

// Mock user data
const mockUsers: User[] = [
  {
    id: "user-1",
    name: "Zephyr Cloud",
    username: "ZephyrCloudIO",
    avatar: "/src/assets/placeholder.svg",
    verified: true,
    followers: 2890,
    following: 450
  },
];

// Query functions
const fetchUser = async (id: string): Promise<User | undefined> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockUsers.find(user => user.id === id);
};

// Custom hooks
export function useUser(id: string) {
  return useQuery({
    queryKey: queryKeys.user(id),
    queryFn: () => fetchUser(id),
    enabled: !!id
  });
}

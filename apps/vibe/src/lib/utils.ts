import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// User data model
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

// Tweet data model
export interface Tweet {
  id: string;
  userId: string;
  content: string;
  time: string;
  stats: {
    replies: number;
    retweets: number;
    likes: number;
    views: number;
  };
  media?: string[];
  quotedTweet?: Tweet;
  replyToTweetId?: string;
}

// Trend data model
export interface Trend {
  id: string;
  title: string;
  category: string;
  postCount: number;
  time: string;
}

// Navigation item model
export interface NavigationItem {
  id: string;
  label: string;
  icon: string;
  path: string;
}

// Mock data - Users
export const mockUsers: User[] = [
  {
    id: "user-1",
    name: "Zephyr Cloud",
    username: "ZephyrCloudIO",
    avatar: "/src/assets/placeholder.svg",
    verified: true,
    followers: 2890,
    following: 450
  },
  {
    id: "user-2",
    name: "Russell Canfield",
    username: "RussellCanfield",
    avatar: "/src/assets/placeholder.svg",
    verified: true,
    followers: 6205,
    following: 735
  },
  {
    id: "user-3",
    name: "Xuan Huang · 黄玄",
    username: "Huxpro",
    avatar: "/src/assets/placeholder.svg",
    verified: true,
    bio: "PM @LynxJS | Previously Engineer @Meta",
    followers: 12800,
    following: 842
  },
  {
    id: "user-4",
    name: "Lynx",
    username: "LynxJS.org",
    avatar: "/src/assets/placeholder.svg",
    verified: true,
    bio: "The official account for the Lynx JavaScript framework.",
    followers: 45600,
    following: 122
  }
];

// Mock data - Trends
export const mockTrends: Trend[] = [
  {
    id: "trend-1",
    title: "OpenAI Launches GPT-4.1 Models",
    category: "Technology",
    postCount: 5300,
    time: "3 hours ago"
  },
  {
    id: "trend-2",
    title: "San Diego Earthquake: USGS Confirms 5.2 Magnitude",
    category: "Earthquake",
    postCount: 15000,
    time: "2 hours ago"
  },
  {
    id: "trend-3",
    title: "Armed Intruder Arrested at UnitedHealthcare HQ in Minnetonka",
    category: "Crime",
    postCount: 358,
    time: "2 hours ago"
  },
  {
    id: "trend-4",
    title: "General Matter Launches to Revive U.S. Uranium Enrichment",
    category: "Nuclear",
    postCount: 431,
    time: "3 hours ago"
  }
];

// Mock data - Navigation items
export const mockNavigationItems = [
  {
    id: "nav-1",
    label: "Home",
    icon: "Home",
    path: "/home"
  },
  {
    id: "nav-2",
    label: "Explore",
    icon: "Search",
    path: "/explore"
  },
  {
    id: "nav-3",
    label: "Notifications",
    icon: "MessageCircle",
    path: "/notifications"
  },
  {
    id: "nav-4",
    label: "Messages",
    icon: "MessageCircle",
    path: "/messages"
  },
  {
    id: "nav-5",
    label: "Grok",
    icon: "ListMusic",
    path: "/grok"
  },
  {
    id: "nav-6",
    label: "Premium",
    icon: "X",
    path: "/premium"
  },
  {
    id: "nav-7",
    label: "Bookmarks",
    icon: "Bookmark",
    path: "/bookmarks"
  },
  {
    id: "nav-8",
    label: "Communities",
    icon: "Users",
    path: "/communities"
  },
  {
    id: "nav-9",
    label: "Articles",
    icon: "PenSquare",
    path: "/articles"
  },
  {
    id: "nav-10",
    label: "Verified Orgs",
    icon: "Star",
    path: "/verified-orgs"
  },
  {
    id: "nav-11",
    label: "Profile",
    icon: "User",
    path: "/profile"
  },
  {
    id: "nav-12",
    label: "More",
    icon: "MoreHorizontal",
    path: "/more"
  }
];

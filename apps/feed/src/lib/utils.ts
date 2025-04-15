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

// Mock data - Tweets
export const mockTweets: Tweet[] = [
  {
    id: "tweet-1",
    userId: "user-2",
    content: "Who is using GPT 4.1 on Wingman?",
    time: "11m",
    stats: {
      replies: 0,
      retweets: 0,
      likes: 1,
      views: 17
    }
  },
  {
    id: "tweet-2",
    userId: "user-3",
    content: "Things we've been cooking @LynxJS.org in react to the community:\n1. Native module; NAPI FFI\n2. New fwk intergration; vanilla JS\n3. More native elements/components\n4. More platform (desktop, Harmony)\n5. Graphics (Canvas, Lottie)\n6. AI friendliness\n\nThanks for the feedback!",
    time: "3h",
    stats: {
      replies: 2,
      retweets: 2,
      likes: 43,
      views: 1400
    }
  },
  {
    id: "tweet-3",
    userId: "user-3",
    content: "Read our official roadmap:",
    time: "3h",
    stats: {
      replies: 1,
      retweets: 0,
      likes: 4,
      views: 710
    },
    quotedTweet: {
      id: "tweet-3-1",
      userId: "user-4",
      content: "🚀 The 2025 roadmap for Lynx is live! Discover our steady release schedule, expanded platform support (desktop and more), new capabilities, UI elements, and more. Check it out!...",
      time: "Mar 19",
      stats: {
        replies: 15,
        retweets: 24,
        likes: 158,
        views: 3200
      }
    }
  },
  {
    id: "tweet-4",
    userId: "user-3",
    content: "Ahh it feels good to finally shake off the jet lag and get back to work",
    time: "3h",
    stats: {
      replies: 0,
      retweets: 0,
      likes: 0,
      views: 0
    }
  }
];

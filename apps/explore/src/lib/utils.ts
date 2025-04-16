import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Trend data model
export interface Trend {
  id: string;
  title: string;
  category: string;
  postCount: number;
  time: string;
}

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
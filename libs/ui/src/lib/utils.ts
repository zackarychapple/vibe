import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Twitter theme-specific variants
export const twitterTheme = {
  // Colors
  colors: {
    blue: "#1d9bf0",
    "blue-dark": "#1a8cd8",
    dark: "#000000",
    "dark-hover": "rgba(255, 255, 255, 0.03)",
    "dark-lighter": "#16181c",
    gray: "#71717a",
    "gray-dark": "#16181c",
    white: "#ffffff",
  },
  // Text variants
  text: {
    blue: "text-[#1d9bf0]",
    gray: "text-[#71717a]",
    white: "text-[#fff]",
  },
  // Background variants
  bg: {
    blue: "bg-[#1d9bf0]",
    "blue-dark": "bg-[#1a8cd8]",
    dark: "bg-[#000]",
    "dark-hover": "bg-[rgba(255,255,255,0.03)]",
    "dark-lighter": "bg-[#16181c]",
  },
  // Border variants
  border: {
    gray: "border-[#2f3336]",
    "gray-dark": "border-[#16181c]",
  },
  // Hover variants
  hover: {
    "bg-blue-dark": "hover:bg-[#1a8cd8]",
    "bg-dark-hover": "hover:bg-[rgba(255,255,255,0.03)]",
  },
};
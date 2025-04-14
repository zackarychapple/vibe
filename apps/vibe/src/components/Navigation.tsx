import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Bookmark,
  Home,
  ListMusic,
  MessageCircle,
  MoreHorizontal,
  PenSquare,
  Search,
  Star,
  User,
  Users,
  X,
} from "lucide-react";
import { useNavigationItems, useUser } from "../lib/query";
import { Link } from "@tanstack/react-router";

// Map icon names to Lucide icon components
const iconMap: Record<string, React.ElementType> = {
  "Home": Home,
  "Search": Search,
  "MessageCircle": MessageCircle,
  "ListMusic": ListMusic,
  "X": X,
  "Bookmark": Bookmark,
  "Users": Users,
  "PenSquare": PenSquare,
  "Star": Star,
  "User": User,
  "MoreHorizontal": MoreHorizontal,
};

export default function Navigation() {
  const { data: navItems = [], isLoading: isNavLoading } = useNavigationItems();
  const { data: currentUser, isLoading: isUserLoading } = useUser("user-1"); // Assuming user-1 is the logged-in user

  return (
    <div className="hidden md:flex flex-col w-64 p-4 border-r border-twitter-gray-dark">
      <div className="flex items-center justify-between mb-6">
        <X className="h-8 w-8" />
      </div>

      <nav className="space-y-4">
        {isNavLoading ? (
          // Loading state for navigation items
          Array(6).fill(0).map((_, i) => (
            <div key={i} className="h-12 rounded-full bg-twitter-dark-hover animate-pulse" />
          ))
        ) : (
          navItems.map((item) => {
            const IconComponent = iconMap[item.icon] || Home;
            return (
              <Button 
                key={item.id} 
                variant="ghost" 
                className="w-full justify-start text-lg font-semibold hover:bg-twitter-dark-hover rounded-full"
                asChild
              >
                <Link to={item.path} activeProps={{ className: "bg-twitter-dark-hover" }}>
                  <IconComponent className="mr-4 h-6 w-6" />
                  {item.label}
                </Link>
              </Button>
            );
          })
        )}
      </nav>

      <Button className="mt-6 w-full rounded-full bg-twitter-blue hover:bg-twitter-blue-dark">Post</Button>

      <div className="mt-auto flex items-center gap-2 p-4">
        {isUserLoading ? (
          // Loading state for user profile
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-twitter-dark-hover animate-pulse" />
            <div className="flex-1">
              <div className="h-4 w-32 bg-twitter-dark-hover animate-pulse rounded mb-2" />
              <div className="h-3 w-24 bg-twitter-dark-hover animate-pulse rounded" />
            </div>
          </div>
        ) : currentUser ? (
          <>
            <Avatar className="h-10 w-10">
              <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
              <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="font-semibold flex items-center">
                {currentUser.name} {currentUser.verified && <span className="ml-1 text-yellow-400">✓</span>}
              </span>
              <span className="text-twitter-gray text-sm">@{currentUser.username}</span>
            </div>
            <MoreHorizontal className="ml-auto h-5 w-5 text-twitter-gray" />
          </>
        ) : (
          <div className="text-twitter-gray">User not found</div>
        )}
      </div>
    </div>
  );
}
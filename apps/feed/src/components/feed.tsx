import { Avatar, AvatarFallback, AvatarImage, Button, Input } from "@vibe/ui";
import { BarChart2, ImageIcon, ListMusic, MapPin, Star } from "lucide-react";
import { useUser } from "../lib/query";
import { Outlet, useRouter, useRouterState } from "@tanstack/react-router";
import '../styles.css';

export default function Feed() {
  const router = useRouter();
  const routerState = useRouterState();
  const isFollowing = routerState.location.pathname === '/following';
  const { data: currentUser } = useUser("user-1"); // Assuming user-1 is the logged-in user

  return (
    <div className="flex-1 border-x border-twitter-gray-dark max-w-2xl">
      <div className="sticky top-0 z-10 bg-twitter-dark backdrop-blur-sm">
        <div className="grid grid-cols-2 h-14">
          <div
            className={`flex items-center justify-center h-full ${
              !isFollowing
                ? "bg-white text-black border-b-2 border-twitter-blue"
                : "text-twitter-gray hover:bg-twitter-dark-hover"
            }`}
            onClick={() => router.navigate({ to: '/' })}
          >
            <span className="font-medium">For you</span>
          </div>
          <div
            className={`flex items-center justify-center h-full ${
              isFollowing
                ? "bg-white text-black border-b-2 border-twitter-blue"
                : "text-twitter-gray hover:bg-twitter-dark-hover"
            }`}
            onClick={() => router.navigate({ to: '/following' })}
          >
            <span className="font-medium">Following</span>
          </div>
        </div>
      </div>

      <div className="p-4 border-b border-twitter-gray-dark">
        <div className="flex gap-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src={currentUser?.avatar || "/src/assets/placeholder.svg"} alt={currentUser?.name || "User"} />
            <AvatarFallback>{currentUser?.name?.charAt(0) || "U"}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <Input
              className="bg-transparent border-none text-lg placeholder:text-twitter-gray focus-visible:ring-0 focus-visible:ring-offset-0"
              placeholder="What's happening?" style={{ backgroundColor: 'transparent', border: 'none', color: 'white' }}
            />
            <div className="flex items-center mt-4">
              <div className="flex gap-2 text-twitter-blue">
                <Button variant="ghost" rounded="full" size="icon" className="h-9 w-9">
                  <ImageIcon className="h-5 w-5" />
                </Button>
                <Button variant="ghost" rounded="full" size="icon" className="h-9 w-9">
                  <ListMusic className="h-5 w-5" />
                </Button>
                <Button variant="ghost" rounded="full" size="icon" className="h-9 w-9">
                  <BarChart2 className="h-5 w-5" />
                </Button>
                <Button variant="ghost" rounded="full" size="icon" className="h-9 w-9">
                  <MapPin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" rounded="full" size="icon" className="h-9 w-9">
                  <Star className="h-5 w-5" />
                </Button>
              </div>
              <Button variant="twitter" rounded="full" className="ml-auto px-4">Post</Button>
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
}

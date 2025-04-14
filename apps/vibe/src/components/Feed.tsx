import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { BarChart2, ImageIcon, ListMusic, MapPin, Star } from "lucide-react";
import Tweet from "./Tweet";
import { useTweets, useUser, useUsers } from "../lib/query";
import { User } from "../lib/utils";

export default function Feed() {
  const [activeTab, setActiveTab] = useState("for-you");
  const { data: tweets = [], isLoading: isTweetsLoading } = useTweets();
  const { data: users = [], isLoading: isUsersLoading } = useUsers();
  const { data: currentUser } = useUser("user-1"); // Assuming user-1 is the logged-in user

  // Helper function to find user by userId
  const getUserById = (userId: string): User | undefined => {
    return users.find(user => user.id === userId);
  };

  return (
    <div className="flex-1 border-x border-twitter-gray-dark max-w-2xl">
      <div className="sticky top-0 z-10 bg-twitter-dark backdrop-blur-sm">
        <div className="grid grid-cols-2 h-14">
          <div
            className={`flex items-center justify-center h-full ${
              activeTab === "for-you"
                ? "bg-white text-black border-b-2 border-twitter-blue"
                : "text-twitter-gray hover:bg-twitter-dark-hover"
            }`}
            onClick={() => setActiveTab("for-you")}
          >
            <span className="font-medium">For you</span>
          </div>
          <div
            className={`flex items-center justify-center h-full ${
              activeTab === "following"
                ? "bg-white text-black border-b-2 border-twitter-blue"
                : "text-twitter-gray hover:bg-twitter-dark-hover"
            }`}
            onClick={() => setActiveTab("following")}
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
                <Button variant="ghost" size="icon" className="rounded-full h-9 w-9">
                  <ImageIcon className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full h-9 w-9">
                  <ListMusic className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full h-9 w-9">
                  <BarChart2 className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full h-9 w-9">
                  <MapPin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full h-9 w-9">
                  <Star className="h-5 w-5" />
                </Button>
              </div>
              <Button className="ml-auto rounded-full bg-twitter-blue hover:bg-twitter-blue-dark px-4">Post</Button>
            </div>
          </div>
        </div>
      </div>

      {(isTweetsLoading || isUsersLoading) ? (
        // Loading state for tweets
        <div className="space-y-4 p-4">
          {Array(3).fill(0).map((_, i) => (
            <div key={i} className="flex gap-3">
              <div className="h-10 w-10 rounded-full bg-twitter-dark-hover animate-pulse" />
              <div className="flex-1">
                <div className="h-4 w-32 bg-twitter-dark-hover animate-pulse rounded mb-2" />
                <div className="h-3 w-24 bg-twitter-dark-hover animate-pulse rounded mb-3" />
                <div className="h-24 bg-twitter-dark-hover animate-pulse rounded mb-3" />
                <div className="flex justify-between">
                  {Array(4).fill(0).map((_, j) => (
                    <div key={j} className="h-3 w-12 bg-twitter-dark-hover animate-pulse rounded" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="text-center py-3 text-twitter-blue text-sm border-b border-twitter-gray-dark">
            Show {tweets.length} posts
          </div>

          {tweets.map(tweet => {
            const user = getUserById(tweet.userId);
            if (!user) return null;
            
            return (
              <Tweet
                key={tweet.id}
                tweetId={tweet.id}
                avatar={user.avatar}
                name={user.name}
                username={user.username}
                verified={user.verified}
                time={tweet.time}
                content={tweet.content}
                stats={tweet.stats}
                quotedTweet={tweet.quotedTweet ? {
                  ...tweet.quotedTweet,
                  user: getUserById(tweet.quotedTweet.userId)
                } : undefined}
              />
            );
          })}
        </>
      )}
    </div>
  );
}
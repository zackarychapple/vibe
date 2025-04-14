import type { ReactNode } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { ArrowUpFromLine, BarChart2, Bookmark, MessageCircle, MoreHorizontal, Share, Star } from "lucide-react";
import { User, Tweet as TweetType } from "../lib/utils";
import { useTweet } from "../lib/query";

interface TweetProps {
  tweetId?: string;
  avatar: string;
  name: string;
  username: string;
  verified?: boolean;
  time: string;
  content: ReactNode;
  stats: {
    replies: number;
    retweets: number;
    likes: number;
    views: number;
  };
  quotedTweet?: {
    id: string;
    content: string;
    time: string;
    user?: User;
    stats: {
      replies: number;
      retweets: number;
      likes: number;
      views: number;
    };
  };
}

export default function Tweet({ 
  tweetId, 
  avatar, 
  name, 
  username, 
  verified = false, 
  time, 
  content, 
  stats, 
  quotedTweet 
}: TweetProps) {
  // If tweetId is provided, we could optionally fetch the tweet data directly
  // const { data: tweetData } = useTweet(tweetId || '');
  
  return (
    <div className="border-b border-gray-800 p-4">
      <div className="flex">
        <Avatar className="h-10 w-10 mr-3">
          <AvatarImage src={avatar || "/src/assets/placeholder.svg"} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center">
            <span className="font-bold">{name}</span>
            {verified && <span className="text-twitter-blue ml-1">✓</span>}
            <span className="text-twitter-gray ml-2">
              @{username} · {time}
            </span>
            <Button variant="ghost" size="icon" className="ml-auto rounded-full h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="mt-1">
            {typeof content === 'string' ? (
              <p>{content}</p>
            ) : (
              content
            )}
          </div>
          
          {quotedTweet && quotedTweet.user && (
            <div className="mt-3 border border-gray-800 rounded-xl overflow-hidden">
              <div className="p-3">
                <div className="flex items-center">
                  <Avatar className="h-5 w-5 mr-2">
                    <AvatarImage src={quotedTweet.user.avatar} alt={quotedTweet.user.name} />
                    <AvatarFallback>{quotedTweet.user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="font-bold">{quotedTweet.user.name}</span>
                  {quotedTweet.user.verified && <span className="text-twitter-blue ml-1">✓</span>}
                  <span className="text-twitter-gray ml-2">@{quotedTweet.user.username} · {quotedTweet.time}</span>
                </div>
                <p className="mt-2">{quotedTweet.content}</p>
                {quotedTweet.content.length > 100 && (
                  <p className="text-twitter-blue text-sm mt-1">Show more</p>
                )}
              </div>
            </div>
          )}
          
          <div className="flex items-center justify-between mt-3 text-twitter-gray">
            <Button variant="ghost" size="sm" className="rounded-full gap-2">
              <MessageCircle className="h-4 w-4" />
              {stats.replies > 0 && <span>{stats.replies}</span>}
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full gap-2">
              <ArrowUpFromLine className="h-4 w-4" />
              {stats.retweets > 0 && <span>{stats.retweets}</span>}
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full gap-2">
              <Star className="h-4 w-4" />
              {stats.likes > 0 && <span>{stats.likes}</span>}
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full gap-2">
              <BarChart2 className="h-4 w-4" />
              {stats.views > 0 && <span>{stats.views}</span>}
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full gap-2">
              <Bookmark className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full gap-2">
              <Share className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
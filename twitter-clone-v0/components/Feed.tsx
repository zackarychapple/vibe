"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BarChart2, ImageIcon, ListMusic, MapPin, Star } from "lucide-react"
import Tweet from "./Tweet"

export default function Feed() {
  const [activeTab, setActiveTab] = useState("for-you")

  return (
    <div className="flex-1 border-x border-gray-800 max-w-2xl">
      <div className="sticky top-0 z-10 bg-black backdrop-blur-sm">
        <div className="grid grid-cols-2 h-14">
          <div
            className={`flex items-center justify-center h-full ${
              activeTab === "for-you"
                ? "bg-white text-black border-b-2 border-sky-500"
                : "text-gray-500 hover:bg-gray-900/20"
            }`}
            onClick={() => setActiveTab("for-you")}
          >
            <span className="font-medium">For you</span>
          </div>
          <div
            className={`flex items-center justify-center h-full ${
              activeTab === "following"
                ? "bg-white text-black border-b-2 border-sky-500"
                : "text-gray-500 hover:bg-gray-900/20"
            }`}
            onClick={() => setActiveTab("following")}
          >
            <span className="font-medium">Following</span>
          </div>
        </div>
      </div>

      <div className="p-4 border-b border-gray-800">
        <div className="flex gap-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/abstract-headscape.png" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <Input
              className="bg-transparent border-none text-lg placeholder:text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0"
              placeholder="What's happening?"
            />
            <div className="flex items-center mt-4">
              <div className="flex gap-2 text-sky-500">
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
              <Button className="ml-auto rounded-full bg-sky-500 hover:bg-sky-600 px-4">Post</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-3 text-sky-500 text-sm border-b border-gray-800">Show 35 posts</div>

      <Tweet
        avatar="/thoughtful-spectacled-man.png"
        name="Russell Canfield"
        username="RussellCanfield"
        verified={true}
        time="11m"
        content="Who is using GPT 4.1 on Wingman?"
        stats={{ replies: 0, retweets: 0, likes: 1, views: 17 }}
      />

      <Tweet
        avatar="/thoughtful-urbanite.png"
        name="Xuan Huang · 黄玄"
        username="Huxpro"
        verified={true}
        time="3h"
        content={
          <>
            <p>
              Things we've been cooking <span className="text-sky-500">@LynxJS.org</span> in react to the community:
            </p>
            <ol className="list-decimal pl-5 mt-2">
              <li>Native module; NAPI FFI</li>
              <li>New fwk intergration; vanilla JS</li>
              <li>More native elements/components</li>
              <li>More platform (desktop, Harmony)</li>
              <li>Graphics (Canvas, Lottie)</li>
              <li>AI friendliness</li>
            </ol>
            <p className="mt-2">Thanks for the feedback!</p>
          </>
        }
        stats={{ replies: 2, retweets: 2, likes: 43, views: 1400 }}
      />

      <Tweet
        avatar="/thoughtful-urbanite.png"
        name="Xuan Huang · 黄玄"
        username="Huxpro"
        verified={true}
        time="3h"
        content={
          <>
            <p>Read our official roadmap:</p>
            <div className="mt-3 border border-gray-800 rounded-xl overflow-hidden">
              <div className="p-3">
                <div className="flex items-center">
                  <Avatar className="h-5 w-5 mr-2">
                    <AvatarImage src="/stylized-lynx-profile.png" alt="Lynx" />
                    <AvatarFallback>L</AvatarFallback>
                  </Avatar>
                  <span className="font-bold">Lynx</span>
                  <span className="text-sky-500 ml-1">✓</span>
                  <span className="text-gray-500 ml-2">@LynxJS.org · Mar 19</span>
                </div>
                <p className="mt-2">🚀 The 2025 roadmap for Lynx is live!</p>
                <p className="mt-2 text-sm">
                  Discover our steady release schedule, expanded platform support (desktop and more), new capabilities,
                  UI elements, and more. Check it out!...
                </p>
                <p className="text-sky-500 text-sm mt-1">Show more</p>
              </div>
            </div>
          </>
        }
        stats={{ replies: 1, retweets: 0, likes: 4, views: 710 }}
      />

      <Tweet
        avatar="/thoughtful-urbanite.png"
        name="Xuan Huang · 黄玄"
        username="Huxpro"
        verified={true}
        time="3h"
        content="Ahh it feels good to finally shake off the jet lag and get back to work"
        stats={{ replies: 0, retweets: 0, likes: 0, views: 0 }}
      />
    </div>
  )
}

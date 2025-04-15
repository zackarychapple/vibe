import Navigation from "./Navigation";
import RightSidebar from "./RightSidebar";
import BottomNavigation from "./BottomNavigation";
import MessagesButton from "./MessagesButton";
import * as React from "react";

const FeedR = React.lazy(() => import('feed/feed'));

export default function TwitterClone() {
  return (
    <div className="flex min-h-screen bg-twitter-dark text-twitter-white">
      <Navigation />
      <React.Suspense fallback={<div className="flex-1 border-x border-twitter-gray-dark max-w-2xl">Loading Feed...</div>}>
        <FeedR />
      </React.Suspense>
      <RightSidebar />
      <BottomNavigation />
      <MessagesButton />
    </div>
  );
}

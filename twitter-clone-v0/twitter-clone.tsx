"use client"

import Navigation from "./components/Navigation"
import Feed from "./components/Feed"
import RightSidebar from "./components/RightSidebar"
import BottomNavigation from "./components/BottomNavigation"
import MessagesButton from "./components/MessagesButton"

export default function TwitterClone() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <Navigation />
      <Feed />
      <RightSidebar />
      <BottomNavigation />
      <MessagesButton />
    </div>
  )
}

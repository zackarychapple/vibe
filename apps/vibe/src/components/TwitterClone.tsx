import Navigation from "./Navigation";
import Feed from "./Feed";
import RightSidebar from "./RightSidebar";
import BottomNavigation from "./BottomNavigation";
import MessagesButton from "./MessagesButton";

export default function TwitterClone() {
  return (
    <div className="flex min-h-screen bg-twitter-dark text-twitter-white">
      <Navigation />
      <Feed />
      <RightSidebar />
      <BottomNavigation />
      <MessagesButton />
    </div>
  );
}
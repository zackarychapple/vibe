import Navigation from "./Navigation";
import RightSidebar from "./RightSidebar";
import MessagesButton from "./MessagesButton";
import {Outlet} from "@tanstack/react-router";

export default function TwitterClone() {
  return (
    <div className="flex min-h-screen bg-twitter-dark text-twitter-white">
      <Navigation />
      <Outlet />
      <RightSidebar />
      <MessagesButton />
    </div>
  );
}

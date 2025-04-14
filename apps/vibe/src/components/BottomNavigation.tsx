import { Button } from "./ui/button";
import { Home, MessageCircle, Search, User } from "lucide-react";
import { Link } from "react-router-dom";

const bottomNavItems = [
  { id: "bottom-nav-1", label: "Home", icon: Home, path: "/" },
  { id: "bottom-nav-2", label: "Explore", icon: Search, path: "/explore" },
  { id: "bottom-nav-3", label: "Messages", icon: MessageCircle, path: "/messages" },
  { id: "bottom-nav-4", label: "Profile", icon: User, path: "/profile" },
];

export default function BottomNavigation() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-twitter-dark border-t border-twitter-gray-dark p-2 flex justify-between md:hidden">
      {bottomNavItems.map((item) => (
        <Button key={item.id} variant="ghost" size="icon" className="text-white" asChild>
          <Link to={item.path}>
            <item.icon className="h-6 w-6" />
          </Link>
        </Button>
      ))}
    </div>
  );
}
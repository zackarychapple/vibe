import { Button } from "./ui/button";
import { Home, MessageCircle, Search, User } from "lucide-react";

export default function BottomNavigation() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 p-2 flex justify-between md:hidden">
      <Button variant="ghost" size="icon" className="text-white">
        <Home className="h-6 w-6" />
      </Button>
      <Button variant="ghost" size="icon" className="text-white">
        <Search className="h-6 w-6" />
      </Button>
      <Button variant="ghost" size="icon" className="text-white">
        <MessageCircle className="h-6 w-6" />
      </Button>
      <Button variant="ghost" size="icon" className="text-white">
        <User className="h-6 w-6" />
      </Button>
    </div>
  );
}
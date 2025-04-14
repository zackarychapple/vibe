import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { X, ImageIcon, ListMusic, BarChart2, MapPin, Star } from "lucide-react";
import { useUser } from "../lib/query";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";

export default function ComposeModal() {
  const { data: currentUser } = useUser("user-1");
  const navigate = useNavigate();
  const [content, setContent] = useState('');

  const handleClose = () => {
    // Navigate back to the previous route
    navigate({ to: "$previousRoute" });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20">
      <div className="bg-twitter-dark rounded-xl w-full max-w-xl">
        <div className="flex items-center p-4 border-b border-twitter-gray-dark">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full h-9 w-9 mr-2" 
            onClick={handleClose}
          >
            <X className="h-5 w-5" />
          </Button>
          <span className="font-bold">New Post</span>
        </div>

        <div className="p-4">
          <div className="flex gap-4">
            <Avatar className="h-10 w-10">
              <AvatarImage 
                src={currentUser?.avatar || "/src/assets/placeholder.svg"} 
                alt={currentUser?.name || "User"} 
              />
              <AvatarFallback>{currentUser?.name?.charAt(0) || "U"}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <textarea
                className="bg-transparent border-none text-lg placeholder:text-twitter-gray focus-visible:ring-0 focus-visible:ring-offset-0 min-h-[100px] w-full resize-none"
                placeholder="What's happening?"
                style={{ backgroundColor: 'transparent', border: 'none', color: 'white' }}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <div className="flex items-center mt-4 border-t border-twitter-gray-dark pt-4">
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
                <Button 
                  className="ml-auto rounded-full bg-twitter-blue hover:bg-twitter-blue-dark px-4"
                  disabled={!content.trim()}
                >
                  Post
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import { Button } from "./ui/button";
import { MessageCircle, PenSquare } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";

export default function MessagesButton() {
  const navigate = useNavigate();

  const handleComposeClick = () => {
    navigate({ to: '/compose/post' });
  };

  return (
    <div className="fixed bottom-20 right-4 md:hidden">
      <Button 
        className="rounded-full h-14 w-14 bg-twitter-blue hover:bg-twitter-blue-dark shadow-lg"
        onClick={handleComposeClick}
      >
        <PenSquare className="h-6 w-6" />
      </Button>
    </div>
  );
}
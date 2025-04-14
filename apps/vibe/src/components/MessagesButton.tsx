import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";

export default function MessagesButton() {
  return (
    <div className="fixed bottom-20 right-4 md:hidden">
      <Button className="rounded-full h-14 w-14 bg-twitter-blue hover:bg-twitter-blue-dark shadow-lg">
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
}
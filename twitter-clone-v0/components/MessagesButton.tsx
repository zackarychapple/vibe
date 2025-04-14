import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export default function MessagesButton() {
  return (
    <div className="fixed bottom-20 right-4 md:hidden">
      <Button className="rounded-full h-14 w-14 bg-sky-500 hover:bg-sky-600 shadow-lg">
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  )
}

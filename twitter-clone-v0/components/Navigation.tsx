import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Bookmark,
  Home,
  ListMusic,
  MessageCircle,
  MoreHorizontal,
  PenSquare,
  Search,
  Star,
  User,
  Users,
  X,
} from "lucide-react"

export default function Navigation() {
  return (
    <div className="hidden md:flex flex-col w-64 p-4 border-r border-gray-800">
      <div className="flex items-center justify-between mb-6">
        <X className="h-8 w-8" />
      </div>

      <nav className="space-y-4">
        <Button variant="ghost" className="w-full justify-start text-lg font-semibold hover:bg-gray-900 rounded-full">
          <Home className="mr-4 h-6 w-6" />
          Home
        </Button>
        <Button variant="ghost" className="w-full justify-start text-lg font-semibold hover:bg-gray-900 rounded-full">
          <Search className="mr-4 h-6 w-6" />
          Explore
        </Button>
        <Button variant="ghost" className="w-full justify-start text-lg font-semibold hover:bg-gray-900 rounded-full">
          <MessageCircle className="mr-4 h-6 w-6" />
          Notifications
        </Button>
        <Button variant="ghost" className="w-full justify-start text-lg font-semibold hover:bg-gray-900 rounded-full">
          <MessageCircle className="mr-4 h-6 w-6" />
          Messages
        </Button>
        <Button variant="ghost" className="w-full justify-start text-lg font-semibold hover:bg-gray-900 rounded-full">
          <ListMusic className="mr-4 h-6 w-6" />
          Grok
        </Button>
        <Button variant="ghost" className="w-full justify-start text-lg font-semibold hover:bg-gray-900 rounded-full">
          <X className="mr-4 h-6 w-6" />
          Premium
        </Button>
        <Button variant="ghost" className="w-full justify-start text-lg font-semibold hover:bg-gray-900 rounded-full">
          <Bookmark className="mr-4 h-6 w-6" />
          Bookmarks
        </Button>
        <Button variant="ghost" className="w-full justify-start text-lg font-semibold hover:bg-gray-900 rounded-full">
          <Users className="mr-4 h-6 w-6" />
          Communities
        </Button>
        <Button variant="ghost" className="w-full justify-start text-lg font-semibold hover:bg-gray-900 rounded-full">
          <PenSquare className="mr-4 h-6 w-6" />
          Articles
        </Button>
        <Button variant="ghost" className="w-full justify-start text-lg font-semibold hover:bg-gray-900 rounded-full">
          <Star className="mr-4 h-6 w-6" />
          Verified Orgs
        </Button>
        <Button variant="ghost" className="w-full justify-start text-lg font-semibold hover:bg-gray-900 rounded-full">
          <User className="mr-4 h-6 w-6" />
          Profile
        </Button>
        <Button variant="ghost" className="w-full justify-start text-lg font-semibold hover:bg-gray-900 rounded-full">
          <MoreHorizontal className="mr-4 h-6 w-6" />
          More
        </Button>
      </nav>

      <Button className="mt-6 w-full rounded-full bg-sky-500 hover:bg-sky-600">Post</Button>

      <div className="mt-auto flex items-center gap-2 p-4">
        <Avatar className="h-10 w-10">
          <AvatarImage src="/abstract-headscape.png" alt="@zephyrCloud" />
          <AvatarFallback>ZC</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-semibold flex items-center">
            Zephyr Cloud <span className="ml-1 text-yellow-400">✓</span>
          </span>
          <span className="text-gray-500 text-sm">@ZephyrCloudIO</span>
        </div>
        <MoreHorizontal className="ml-auto h-5 w-5 text-gray-500" />
      </div>
    </div>
  )
}

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { ChevronRight, Search } from "lucide-react";

export default function RightSidebar() {
  return (
    <div className="hidden lg:block w-80 p-4">
      <div className="sticky top-0 pt-2">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-3 h-4 w-4 text-twitter-gray" />
          <Input className="pl-10 bg-[#16181c] border-none rounded-full text-[#e7e9ea]" placeholder="Search" />
        </div>

        <div className="rounded-2xl border border-[#16181c] mb-4 overflow-hidden">
          <div className="p-4">
            <h2 className="text-xl font-bold text-[#e7e9ea] mb-4">Verified Organizations</h2>

            <div className="bg-[#16181c] rounded-xl p-4 mb-4">
              <p className="text-sm text-twitter-gray">Remaining ads credits</p>
              <p className="text-2xl font-bold text-[#e7e9ea]">$100</p>
            </div>

            <div className="space-y-3">
              <Button variant="ghost" className="w-full justify-between text-[#e7e9ea] hover:bg-[#16181c] rounded-full">
                Manage your ads credits
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button variant="ghost" className="w-full justify-between text-[#e7e9ea] hover:bg-[#16181c] rounded-full">
                Set up an ad campaign
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button variant="ghost" className="w-full justify-between text-[#e7e9ea] hover:bg-[#16181c] rounded-full">
                Manage your jobs
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button variant="ghost" className="w-full justify-between text-[#e7e9ea] hover:bg-[#16181c] rounded-full">
                Get support with an issue
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button variant="ghost" className="w-full justify-between text-twitter-blue hover:bg-[#16181c] rounded-full">
                View all features
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-[#16181c] overflow-hidden">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-[#e7e9ea]">Explore</h2>
              <div className="bg-[#3a1d09] text-[#f5930e] px-2 py-0.5 text-xs font-medium rounded-full border border-[#3a1d09]">
                Beta
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-[#e7e9ea] mb-1">OpenAI Launches GPT-4.1 Models</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <div className="flex -space-x-1 mr-2">
                    <Avatar className="h-5 w-5 border border-black">
                      <AvatarImage src="/src/assets/placeholder.svg" alt="User" />
                      <AvatarFallback>U1</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-5 w-5 border border-black">
                      <AvatarImage src="/src/assets/placeholder.svg" alt="User" />
                      <AvatarFallback>U2</AvatarFallback>
                    </Avatar>
                  </div>
                  <span>3 hours ago · Technology · 5.3K posts</span>
                </div>
              </div>

              <Separator className="bg-[#2f3336]" />

              <div>
                <h3 className="font-bold text-[#e7e9ea] mb-1">San Diego Earthquake: USGS Confirms 5.2 Magnitude</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <div className="flex -space-x-1 mr-2">
                    <Avatar className="h-5 w-5 border border-black">
                      <AvatarImage src="/src/assets/placeholder.svg" alt="User" />
                      <AvatarFallback>U3</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-5 w-5 border border-black">
                      <AvatarImage src="/src/assets/placeholder.svg" alt="User" />
                      <AvatarFallback>U4</AvatarFallback>
                    </Avatar>
                  </div>
                  <span>2 hours ago · Earthquake · 15K posts</span>
                </div>
              </div>

              <Separator className="bg-[#2f3336]" />

              <div>
                <h3 className="font-bold text-[#e7e9ea] mb-1">
                  Armed Intruder Arrested at UnitedHealthcare HQ in Minnetonka
                </h3>
                <div className="flex items-center text-sm text-gray-500">
                  <div className="flex -space-x-1 mr-2">
                    <Avatar className="h-5 w-5 border border-black">
                      <AvatarImage src="/src/assets/placeholder.svg" alt="User" />
                      <AvatarFallback>U5</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-5 w-5 border border-black">
                      <AvatarImage src="/src/assets/placeholder.svg" alt="User" />
                      <AvatarFallback>U6</AvatarFallback>
                    </Avatar>
                  </div>
                  <span>2 hours ago · Crime · 358 posts</span>
                </div>
              </div>

              <Separator className="bg-[#2f3336]" />

              <div>
                <h3 className="font-bold text-[#e7e9ea] mb-1">
                  General Matter Launches to Revive U.S. Uranium Enrichment
                </h3>
                <div className="flex items-center text-sm text-gray-500">
                  <div className="flex -space-x-1 mr-2">
                    <Avatar className="h-5 w-5 border border-black">
                      <AvatarImage src="/src/assets/placeholder.svg" alt="User" />
                      <AvatarFallback>U7</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-5 w-5 border border-black">
                      <AvatarImage src="/src/assets/placeholder.svg" alt="User" />
                      <AvatarFallback>U8</AvatarFallback>
                    </Avatar>
                  </div>
                  <span>3 hours ago · Nuclear · 431 posts</span>
                </div>
              </div>
            </div>

            <Button variant="ghost" className="w-full text-twitter-blue mt-4 hover:bg-[#16181c]">
              Show more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
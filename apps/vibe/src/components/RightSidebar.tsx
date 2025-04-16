import { Input } from "./ui/input";
import { Search } from "lucide-react";
import * as React from "react";

const VerifiedOrgs = React.lazy(() => import('verified_orgs/verified_orgs'));
const Explore = React.lazy(() => import('explore/explore'));

export default function RightSidebar() {

  return (
    <div className="hidden lg:block w-80 p-4">
      <div className="sticky top-0 pt-2">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-3 h-4 w-4 text-twitter-gray" />
          <Input className="pl-10 bg-[#16181c] border-none rounded-full text-[#e7e9ea]" placeholder="Search" />
        </div>

        <React.Suspense fallback={
          <div className="rounded-2xl border border-[#16181c] mb-4 overflow-hidden">
            <div className="p-4 animate-pulse">
              <div className="h-6 w-3/4 bg-twitter-dark-hover rounded mb-4"></div>
              <div className="h-16 bg-twitter-dark-hover rounded mb-4"></div>
              <div className="space-y-3">
                {Array(5).fill(0).map((_, i) => (
                  <div key={i} className="h-9 bg-twitter-dark-hover rounded"></div>
                ))}
              </div>
            </div>
          </div>
        }>
          <VerifiedOrgs />
        </React.Suspense>

        <React.Suspense fallback={
          <div className="rounded-2xl border border-[#16181c] overflow-hidden">
            <div className="p-4 animate-pulse">
              <div className="h-6 w-3/4 bg-twitter-dark-hover rounded mb-4"></div>
              <div className="space-y-6">
                {Array(4).fill(0).map((_, i) => (
                  <div key={i} className="space-y-2">
                    <div className="h-5 w-full bg-twitter-dark-hover rounded" />
                    <div className="h-4 w-3/4 bg-twitter-dark-hover rounded" />
                  </div>
                ))}
              </div>
              <div className="h-10 bg-twitter-dark-hover rounded mt-4"></div>
            </div>
          </div>
        }>
          <Explore />
        </React.Suspense>
      </div>
    </div>
  );
}

import { useTrends } from '../lib/query';
import { Separator, Avatar, AvatarFallback, AvatarImage, Button } from '@vibe/ui';

export default function Explore() {
  const { data: trends = [], isLoading: isTrendsLoading } = useTrends();

  return (
    <div className="rounded-2xl border border-[#16181c] overflow-hidden">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-[#e7e9ea]">Explore</h2>
          <div className="bg-[#3a1d09] text-[#f5930e] px-2 py-0.5 text-xs font-medium rounded-full border border-[#3a1d09]">
            Beta
          </div>
        </div>

        {isTrendsLoading ? (
          // Loading state for trends
          <div className="space-y-6">
            {Array(4).fill(0).map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="h-5 w-full bg-twitter-dark-hover animate-pulse rounded" />
                <div className="h-4 w-3/4 bg-twitter-dark-hover animate-pulse rounded" />
                {i < 3 && <Separator className="bg-[#2f3336] mt-4" />}
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {trends.map((trend, index) => (
              <div key={trend.id}>
                <h3 className="font-bold text-[#e7e9ea] mb-1">{trend.title}</h3>
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
                  <span>{trend.time} · {trend.category} · {trend.postCount.toLocaleString()} posts</span>
                </div>
                {index < trends.length - 1 && <Separator className="bg-[#2f3336] mt-4" />}
              </div>
            ))}
          </div>
        )}

        <Button variant="ghost" className="w-full text-twitter-blue mt-4 hover:bg-[#16181c]">
          Show more
        </Button>
      </div>
    </div>
  );
}

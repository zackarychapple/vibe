import { useTweets, useUsers } from '../lib/query';
import Tweet from '../components/Tweet';
import { User } from '../lib/utils';

export default function Index() {
  const { data: tweets = [], isLoading: isTweetsLoading } = useTweets();
  const { data: users = [], isLoading: isUsersLoading } = useUsers();

  // Helper function to find user by userId
  const getUserById = (userId: string): User | undefined => {
    return users.find(user => user.id === userId);
  };

  return (
    <>
      {(isTweetsLoading || isUsersLoading) ? (
        // Loading state for tweets
        <div className="space-y-4 p-4">
          {Array(3).fill(0).map((_, i) => (
            <div key={i} className="flex gap-3">
              <div className="h-10 w-10 rounded-full bg-twitter-dark-hover animate-pulse" />
              <div className="flex-1">
                <div className="h-4 w-32 bg-twitter-dark-hover animate-pulse rounded mb-2" />
                <div className="h-3 w-24 bg-twitter-dark-hover animate-pulse rounded mb-3" />
                <div className="h-24 bg-twitter-dark-hover animate-pulse rounded mb-3" />
                <div className="flex justify-between">
                  {Array(4).fill(0).map((_, j) => (
                    <div key={j} className="h-3 w-12 bg-twitter-dark-hover animate-pulse rounded" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="text-center py-3 text-twitter-blue text-sm border-b border-twitter-gray-dark">
            Show {tweets.length} posts
          </div>

          {tweets.map(tweet => {
            const user = getUserById(tweet.userId);
            if (!user) return null;
            
            return (
              <Tweet
                key={tweet.id}
                tweetId={tweet.id}
                avatar={user.avatar}
                name={user.name}
                username={user.username}
                verified={user.verified}
                time={tweet.time}
                content={tweet.content}
                stats={tweet.stats}
                quotedTweet={tweet.quotedTweet ? {
                  ...tweet.quotedTweet,
                  user: getUserById(tweet.quotedTweet.userId)
                } : undefined}
              />
            );
          })}
        </>
      )}
    </>
  );
}
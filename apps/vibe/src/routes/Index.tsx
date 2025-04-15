import * as React from "react";
const FeedR = React.lazy(() => import('feed/feed'));
export default function Index() {

  return (
    <>
      <React.Suspense fallback={<div className="flex-1 border-x border-twitter-gray-dark max-w-2xl">Loading Feed...</div>}>
        <FeedR />
      </React.Suspense>
    </>
  );
}

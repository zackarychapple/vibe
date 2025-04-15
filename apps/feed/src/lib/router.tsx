import {createRootRoute, createRoute, createRouter, Outlet} from '@tanstack/react-router';
import Feed from '../components/feed';
import * as React from "react";

// Define the root route
const rootRoute = createRootRoute({
  component: ()=> <div><Outlet /></div>,
  // Redirect from root to home
  // TODO: Fix this properly
  beforeLoad: () => {
    if (window.location.pathname === '/') {
      window.location.pathname = '/home';
    }
  }
});

// Create the feed route
const feedRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/home',
  component: Feed,
});

// Create a few child routes for the feed
const forYouRoute = createRoute({
  getParentRoute: () => feedRoute,
  path: '/',
  component: () => (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">For You Feed</h2>
      <div className="space-y-4">
        <div className="p-4 border border-twitter-gray-dark rounded-lg">
          <p>Content from the For You feed will appear here</p>
        </div>
      </div>
    </div>
  ),
});

const followingRoute = createRoute({
  getParentRoute: () => feedRoute,
  path: '/following',
  component: () => (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Following Feed</h2>
      <div className="space-y-4">
        <div className="p-4 border border-twitter-gray-dark rounded-lg">
          <p>Content from accounts you follow will appear here</p>
        </div>
      </div>
    </div>
  ),
});

// Create the route tree using your routes
const routeTree = rootRoute.addChildren([
  feedRoute.addChildren([
    forYouRoute,
    followingRoute,
  ]),
]);

// Create the router using your route tree
const router = createRouter({
  routeTree,
  defaultPreloadStaleTime: 0,
});

// Register your router for maximum type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export { router };

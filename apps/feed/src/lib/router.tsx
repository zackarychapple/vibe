import {createRootRoute, createRoute, createRouter, Outlet} from '@tanstack/react-router';
import Index from "../routes/Index";
import Feed from "../components/feed";

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
  component: Index,
});

// Create the route tree using your routes
const routeTree = rootRoute.addChildren([
  feedRoute.addChildren([
    forYouRoute
  ]),
]);

// Create the router using your route tree
const router = createRouter({
  routeTree,
  defaultPreloadStaleTime: 0,
});

export { router };

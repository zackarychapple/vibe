import {
  Route,
  Router,
  RootRoute,
  RouterProvider,
  createRootRoute,
  createRouter,
  createRoute
} from '@tanstack/react-router';
import Root from '../routes/Root';
import Index from '../routes/Index';

// Create a root route with the TwitterClone layout
const rootRoute = createRootRoute({
  component: Root
});

// Create individual routes that will be rendered inside the Feed component's Outlet
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index
});

const feedRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/feed',
  component: Index
});

const exploreRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/explore',
  component: () => (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Explore</h1>
      <p>Explore content will be displayed here.</p>
    </div>
  )
});

const notificationsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/notifications',
  component: () => (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      <p>Your notifications will appear here.</p>
    </div>
  )
});

const messagesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/messages',
  component: () => (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Messages</h1>
      <p>Your conversations will appear here.</p>
    </div>
  )
});

const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/profile',
  component: () => (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <p>Your profile information and tweets will appear here.</p>
    </div>
  )
});

const grokRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/grok',
  component: () => (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Grok</h1>
      <p>Grok AI assistant will be integrated here.</p>
    </div>
  )
});

const premiumRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/premium',
  component: () => (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Premium</h1>
      <p>Premium subscription options will be available here.</p>
    </div>
  )
});

const bookmarksRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/bookmarks',
  component: () => (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Bookmarks</h1>
      <p>Your saved tweets will appear here.</p>
    </div>
  )
});

const communitiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/communities',
  component: () => (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Communities</h1>
      <p>Your communities will be listed here.</p>
    </div>
  )
});

const articlesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/articles',
  component: () => (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Articles</h1>
      <p>Featured articles will be displayed here.</p>
    </div>
  )
});

const verifiedOrgsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/verified-orgs',
  component: () => (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Verified Organizations</h1>
      <p>Verified organization features will be available here.</p>
    </div>
  )
});

const moreRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/more',
  component: () => (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">More</h1>
      <p>Additional options and features will be displayed here.</p>
    </div>
  )
});

// Define the route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  feedRoute,
  exploreRoute,
  notificationsRoute,
  messagesRoute,
  profileRoute,
  grokRoute,
  premiumRoute,
  bookmarksRoute,
  communitiesRoute,
  articlesRoute,
  verifiedOrgsRoute,
  moreRoute,
]);

// Create the router instance
const router = createRouter({
  routeTree,
  defaultPreloadStaleTime: 0,
});

// Register the router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export { router };
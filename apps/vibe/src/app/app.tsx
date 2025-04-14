import '../styles.css';
import TwitterClone from '../components/TwitterClone';
import { Route, Routes, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route
          path="/"
          element={<TwitterClone />}
        />
        <Route
          path="/feed"
          element={<TwitterClone />}
        />
        <Route
          path="/explore"
          element={<TwitterClone />}
        />
        <Route
          path="/notifications"
          element={<TwitterClone />}
        />
        <Route
          path="/messages"
          element={<TwitterClone />}
        />
        <Route
          path="/profile"
          element={<TwitterClone />}
        />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
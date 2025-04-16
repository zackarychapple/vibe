import Explore from "./explore";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

export default function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Explore/>
    </QueryClientProvider>
  );
}

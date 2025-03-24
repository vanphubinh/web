import { RouterProvider, createRouter } from '@tanstack/react-router';
import { QueryClientProvider, QueryKey } from '@tanstack/react-query';
import { queryClient } from '@/lib/query-client';
import ReactDOM from 'react-dom/client';
import { qraft } from '@/lib/qraft';
import { StrictMode } from 'react';

// Import the generated route tree
import { routeTree } from './routeTree.gen';

import reportWebVitals from './reportWebVitals.ts';
import './styles.css';

// Create a new router instance
const router = createRouter({
  routeTree,
  context: {
    qraft,
  },
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

declare module '@tanstack/react-query' {
  interface Register {
    mutationMeta: {
      invalidates?: Array<QueryKey>;
    };
  }
}

// Render the app
const rootElement = document.getElementById('app');
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

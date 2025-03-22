import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { MantineProvider } from '@mantine/core';

export const Route = createRootRoute({
  component: () => (
    <MantineProvider>
      <Outlet />
      <TanStackRouterDevtools />
    </MantineProvider>
  ),
});

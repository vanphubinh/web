import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { MantineProvider } from '@mantine/core';
import type { Services } from '@/api/services';
import { theme } from '@/lib/theme';

export const Route = createRootRouteWithContext<{
  qraft: Services;
}>()({
  component: () => (
    <MantineProvider theme={theme}>
      <Outlet />
      <TanStackRouterDevtools position="bottom-left" />
      <ReactQueryDevtools initialIsOpen={false} />
    </MantineProvider>
  ),
});

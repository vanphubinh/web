import { createFileRoute, Outlet } from '@tanstack/react-router';
import { Sidebar } from '@/components/ui/Sidebar';
import { AppShell } from '@mantine/core';

export const Route = createFileRoute('/_layout')({
  component: Layout,
});

function Layout() {
  return (
    <AppShell
      navbar={{
        width: 250,
        breakpoint: 'sm',
      }}
      padding="md"
    >
      <AppShell.Navbar p="xs" className="border-none">
        <Sidebar />
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

import { createFileRoute } from '@tanstack/react-router';
import { AppShell} from '@mantine/core';
import { Sidebar } from '@/components/ui/Sidebar';

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
 

      <AppShell.Navbar p="xs" className='border-none'>
        <Sidebar />
      </AppShell.Navbar>

      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
  );
}

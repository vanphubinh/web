import { createFileRoute } from '@tanstack/react-router';
import { Paper, Title } from '@mantine/core';
export const Route = createFileRoute('/_layout/inventory/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Paper withBorder className="h-[calc(100dvh-20px)]">
      <Title order={3}>Inventory</Title>
    </Paper>
  );
}

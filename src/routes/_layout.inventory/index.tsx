import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout/inventory/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Inventory</div>;
}

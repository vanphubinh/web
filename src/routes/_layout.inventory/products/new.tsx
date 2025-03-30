import { CreateProductForm } from '@/features/product/components/CreateProductForm';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout/inventory/products/new')({
  component: RouteComponent,
});

function RouteComponent() {
  return <CreateProductForm />;
}

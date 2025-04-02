import { createFileRoute, Link, retainSearchParams } from '@tanstack/react-router';
import { ListPaginatedProductsParamsSchema } from '@/features/product/validators';
import { ListProducts } from '@/features/product/components/ListProducts';
import { Button, Card, Text } from '@mantine/core';
import { Plus } from 'lucide-react';

export const Route = createFileRoute('/_layout/inventory/products/')({
  component: RouteComponent,
  validateSearch: ListPaginatedProductsParamsSchema,
  search: {
    middlewares: [retainSearchParams(['page', 'per_page'])],
  },
  loaderDeps: ({ search }) => search,
  loader: ({ context: { qraft }, deps }) =>
    qraft.product.listProducts.ensureQueryData({
      parameters: {
        query: deps,
      },
    }),
});

function RouteComponent() {
  return (
    <Card withBorder className="h-[calc(100dvh-20px)]" padding="0" radius="sm" shadow="sm">
      <div className="flex flex-wrap items-center justify-between px-12 py-2 border-b border-gray-200">
        <Text fw={500} size="sm">
          Danh mục sản phẩm
        </Text>
        <Link to="/inventory/products/new">
          <Button leftSection={<Plus size={14} />}>Tạo</Button>
        </Link>
      </div>
      <ListProducts />
    </Card>
  );
}

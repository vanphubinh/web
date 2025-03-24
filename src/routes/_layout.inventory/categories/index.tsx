import { ListPaginatedCategoriesParamsSchema } from '@/features/category/validators';
import { ListCategories } from '@/features/category/components/ListCategories';
import { createFileRoute, retainSearchParams } from '@tanstack/react-router';
import { Button, Card, Text } from '@mantine/core';
import { Plus } from 'lucide-react';

export const Route = createFileRoute('/_layout/inventory/categories/')({
  component: RouteComponent,
  validateSearch: ListPaginatedCategoriesParamsSchema,
  search: {
    middlewares: [retainSearchParams(['page', 'page_size'])],
  },
  loaderDeps: ({ search }) => search,
  loader: ({ context: { qraft }, deps }) =>
    qraft.catalog.listCategories.ensureQueryData({
      parameters: {
        query: deps,
      },
    }),
});

function RouteComponent() {
  return (
    <Card withBorder className="h-[calc(100dvh-20px)]" padding="0" radius="sm" shadow="sm">
      <div className="flex flex-wrap items-center justify-between px-6 py-2 border-b border-gray-200">
        <Text fw={500} size="sm">
          Danh mục sản phẩm
        </Text>
        <Button leftSection={<Plus size={14} />}>Tạo</Button>
      </div>
      <ListCategories />
    </Card>
  );
}

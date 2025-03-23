import { createFileRoute, retainSearchParams } from '@tanstack/react-router';
import { ListPaginatedUomsParamsSchema } from '@/features/uom/validators';
import { ListUoms } from '@/features/uom/components/ListUoms';
import { Button, Card, Text } from '@mantine/core';
import { Plus } from 'lucide-react';

export const Route = createFileRoute('/_layout/inventory/uoms/')({
  component: RouteComponent,
  validateSearch: ListPaginatedUomsParamsSchema,
  search: {
    middlewares: [retainSearchParams(['page', 'page_size'])],
  },
  loaderDeps: ({ search }) => search,
  loader: ({ context: { qraft }, deps }) =>
    qraft.measurement.listUoms.ensureQueryData({
      parameters: {
        query: deps,
      },
    }),
});

function RouteComponent() {
  return (
    <Card withBorder className="h-[calc(100dvh-20px)]" padding="0" radius="0">
      <div className="flex flex-wrap items-center justify-between px-6 py-2 border-b border-gray-200">
        <Text fw={500} size="sm">
          Đơn vị đo lường
        </Text>
        <Button
          size="compact-sm"
          leftSection={<Plus size={12} />}
          onClick={() => {
            // Handle create UOM action
            console.log('Create UOM clicked');
          }}
        >
          Tạo
        </Button>
      </div>

      <ListUoms />
    </Card>
  );
}

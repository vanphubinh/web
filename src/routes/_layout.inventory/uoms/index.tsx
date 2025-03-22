import {
  createFileRoute,
  getRouteApi,
  retainSearchParams,
  useNavigate,
} from '@tanstack/react-router';
import { ListPaginatedUomsParamsSchema } from '@/features/uom/validators';
import { ListUoms } from '@/features/uom/components/ListUoms';
import { generatePagination } from '@/lib/utils';
import { Button, Title } from '@mantine/core';
import { Plus } from 'lucide-react';
import { qraft } from '@/lib/qraft';

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
    <div className="flex flex-col gap-4 h-[calc(100dvh-32px)]">
      <div className="flex flex-wrap items-center justify-between">
        <Title order={3}>Đơn vị đo lường</Title>
        <Button
          rightSection={<Plus size={16} />}
          onClick={() => {
            // Handle create UOM action
            console.log('Create UOM clicked');
          }}
        >
          Tạo
        </Button>
      </div>
      <ListUoms />
    </div>
  );
}

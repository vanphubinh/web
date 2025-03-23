import { getRouteApi, useNavigate } from '@tanstack/react-router';
import { DataTable } from '@/components/ui/DataTable';
import { generatePagination } from '@/lib/utils';
import { qraft } from '@/lib/qraft';

const uomListRouteApi = getRouteApi('/_layout/inventory/uoms/');

export const ListUoms = () => {
  const navigate = useNavigate({ from: '/inventory/uoms' });
  const queryParams = uomListRouteApi.useSearch();
  const { data: uoms, isPending } = qraft.measurement.listUoms.useQuery({
    query: queryParams,
  });

  const pagination = generatePagination({
    navigate,
    isPending,
    meta: uoms?.meta,
  });
  return (
    <>
      <DataTable
        data={uoms?.data ?? []}
        isPending={isPending}
        columns={[{ header: 'Tên', accessorKey: 'name' }]}
        pagination={pagination}
      />
    </>
  );
};

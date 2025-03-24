import { getRouteApi, useNavigate } from '@tanstack/react-router';
import { DataTable } from '@/components/ui/DataTable';
import { generatePagination } from '@/lib/utils';
import { qraft } from '@/lib/qraft';

const categoryListRouteApi = getRouteApi('/_layout/inventory/categories/');

export const ListCategories = () => {
  const navigate = useNavigate({ from: '/inventory/categories' });
  const queryParams = categoryListRouteApi.useSearch();
  const { data: categories, isPending } = qraft.catalog.listCategories.useQuery({
    query: queryParams,
  });

  const pagination = generatePagination({
    navigate,
    isPending,
    meta: categories?.meta,
  });
  return (
    <>
      <DataTable
        data={categories?.data ?? []}
        isPending={isPending}
        columns={[{ header: 'Tên', accessorKey: 'name' }]}
        pagination={pagination}
      />
    </>
  );
};

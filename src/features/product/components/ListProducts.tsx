import { getRouteApi, useNavigate } from '@tanstack/react-router';
import { DataTable } from '@/components/ui/DataTable';
import { generatePagination } from '@/lib/utils';
import { qraft } from '@/lib/qraft';

const productListRouteApi = getRouteApi('/_layout/inventory/products/');

export const ListProducts = () => {
  const navigate = useNavigate({ from: '/inventory/products' });
  const queryParams = productListRouteApi.useSearch();
  const { data: products, isPending } = qraft.product.listProducts.useQuery({
    query: queryParams,
  });

  const pagination = generatePagination({
    navigate,
    isPending,
    meta: products?.meta,
  });
  return (
    <>
      <DataTable
        data={products?.data ?? []}
        isPending={isPending}
        columns={[{ header: 'Tên', accessorKey: 'name' }]}
        pagination={pagination}
      />
    </>
  );
};

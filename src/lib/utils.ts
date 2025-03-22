import type { UseNavigateResult } from '@tanstack/react-router';
import { components } from '@/api';

type RoutePath =
  | '/inventory/uoms'
  | '/inventory/products'
  | '/inventory/products'
  | '/inventory/categories';

export function generatePagination({
  navigate,
  isPending,
  meta,
}: {
  navigate: UseNavigateResult<RoutePath>;
  isPending: boolean;
  meta?: components['schemas']['PaginationMeta'];
}) {
  return {
    page: meta?.page ?? 1,
    perPage: meta?.perPage ?? 30,
    lastPage: meta?.totalPages ?? 1,
    total: meta?.total ?? 0,
    onPageChange: (nextPage: number) => {
      navigate({
        search: (old) => ({
          ...old,
          page: nextPage,
        }),
      });
    },
    isLoading: isPending,
  };
}

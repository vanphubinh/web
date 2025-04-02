import { Group, Pagination as MantinePagination, Text } from '@mantine/core';

interface PaginationProps {
  page: number;
  perPage: number;
  total: number;
  lastPage: number;
  onPageChange: (page: number) => void;
  isLoading: boolean;
}

export function Pagination({
  page,
  perPage,
  total,
  lastPage,
  onPageChange,
  isLoading,
}: PaginationProps) {
  return (
    <div
      className="flex px-md h-[37px] justify-center px-12"
      style={{
        borderTop: '1px solid var(--mantine-color-gray-3)',
      }}
    >
      {page && onPageChange && (
        <>
          <Group justify="space-between" visibleFrom="md" className="w-full">
            <Text size="sm" c="dimmed">
              Hiện{' '}
              <b>
                {total ? (page - 1) * 30 + 1 : 0} - {page === lastPage ? total : page * 30}
              </b>{' '}
              trong tổng <b>{total}</b>
            </Text>
            <MantinePagination
              size="xs"
              onChange={onPageChange}
              value={page}
              total={lastPage}
              withEdges
              radius="sm"
            />
          </Group>
          <Group justify="space-between" hiddenFrom="md">
            <Text c="dimmed" size="xs">
              <b>
                {total ? (page - 1) * perPage + 1 : 0} -{' '}
                {page === lastPage ? total : page * perPage}
              </b>{' '}
              / <b>{total}</b>
            </Text>
            <MantinePagination.Root
              total={lastPage}
              disabled={isLoading}
              size="xs"
              onChange={onPageChange}
              radius="sm"
            >
              <Group gap={7} justify="center">
                <MantinePagination.Previous />
                <Text size="xs">
                  {page} / {lastPage}
                </Text>
                <MantinePagination.Next />
              </Group>
            </MantinePagination.Root>
          </Group>
        </>
      )}
    </div>
  );
}

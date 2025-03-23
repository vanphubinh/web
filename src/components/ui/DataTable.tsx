import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import tableClasses from '@/components/ui/Table/Table.module.css';
import { Card, Center, Loader, Table, Text } from '@mantine/core';
import { Pagination } from '@/components/ui/Pagination';
import type { ColumnDef } from '@tanstack/react-table';
import { useDebouncedCallback } from '@mantine/hooks';
import { useState } from 'react';
import cx from 'clsx';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  isPending?: boolean;
  emptyMessage?: string;
  pagination: {
    isLoading: boolean;
    total: number;
    page: number;
    lastPage: number;
    perPage: number;
    onPageChange: (page: number) => void;
  };
}

export function DataTable<TData, TValue>({
  columns,
  data,
  isPending,
  emptyMessage = 'Không có kết quả',
  pagination,
}: DataTableProps<TData, TValue>) {
  const [scrolled, setScrolled] = useState(false);
  const { page = 1, onPageChange, lastPage = 1, isLoading, total, perPage = 10 } = pagination ?? {};

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleScroll = useDebouncedCallback((st: number) => {
    if (st > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, 10);

  const paginationComponent = pagination && (
    <Pagination
      page={page}
      total={total}
      lastPage={lastPage}
      onPageChange={onPageChange}
      isLoading={isLoading}
      perPage={perPage}
    />
  );

  return (
    <Card className="flex h-full flex-col" p="0" radius="0">
      <div
        className="grow overflow-auto"
        onScrollCapture={(e) => {
          const st = (e.target as HTMLElement).scrollTop;
          handleScroll(st);
        }}
      >
        <Table
          stickyHeader
          classNames={tableClasses}
          highlightOnHover
          className={cx({
            'h-full': total === 0,
          })}
        >
          <Table.Thead
            className={cx(tableClasses.header, {
              [tableClasses.scrolled]: scrolled,
            })}
          >
            {table.getHeaderGroups().map((headerGroup) => (
              <Table.Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <Table.Th key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </Table.Th>
                  );
                })}
              </Table.Tr>
            ))}
          </Table.Thead>
          <Table.Tbody>
            {!!isPending && (
              <Table.Tr data-hover="false">
                <Table.Td colSpan={columns.length}>
                  <Center h="100%">
                    <Loader />
                  </Center>
                </Table.Td>
              </Table.Tr>
            )}
            {table.getRowModel().rows?.length > 0 &&
              table.getRowModel().rows.map((row) => (
                <Table.Tr key={row.id} data-state={row.getIsSelected() && 'selected'}>
                  {row.getVisibleCells().map((cell) => (
                    <Table.Td key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </Table.Td>
                  ))}
                </Table.Tr>
              ))}
            {!table.getRowModel().rows?.length && !isPending && (
              <Table.Tr data-hover="false" className="h-full text-center">
                <Table.Td colSpan={columns.length}>
                  <Text c="dimmed" fz="lg" fw={400}>
                    {emptyMessage}
                  </Text>
                </Table.Td>
              </Table.Tr>
            )}
          </Table.Tbody>
        </Table>
      </div>
      {paginationComponent}
    </Card>
  );
}

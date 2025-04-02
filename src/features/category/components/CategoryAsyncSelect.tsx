import { AsyncSelect, type AsyncSelectProps } from '@/components/form/AsyncSelect';
import { useEffect, useRef, useState } from 'react';
import { useDebouncedValue } from '@mantine/hooks';
import { FieldValues } from 'react-hook-form';
import { qraft } from '@/lib/qraft';

export function CategoryAsyncSelect<T extends FieldValues>(
  props: Omit<AsyncSelectProps<T>, 'firstRender'>
) {
  const firstRender = useRef(true);
  const [searchValue, setSearchValue] = useState('');
  const [debouncedSearchValue] = useDebouncedValue(searchValue, 250);
  const { data, isLoading } = qraft.catalog.listCategories.useQuery(
    {
      query: {
        page: 1,
        per_page: 30,
      },
    },
    {
      enabled: !!firstRender.current || debouncedSearchValue.length > 0,
    }
  );

  useEffect(() => {
    firstRender.current = false;
  }, []);

  const options = data?.data.map((category) => ({
    id: category.id,
    name: category.name,
  }));

  return (
    <AsyncSelect
      {...props}
      withCheckIcon
      checkIconPosition="right"
      firstRender={firstRender.current}
      variant="underline"
      placeholder="Chọn danh mục"
      isLoading={isLoading}
      size="sm"
      clearable
      data={options}
      label={props.label}
      onSearchChange={setSearchValue}
    />
  );
}

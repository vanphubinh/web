import { AsyncSelect, type AsyncSelectProps } from '@/components/form/AsyncSelect';
import { useEffect, useRef, useState } from 'react';
import { useDebouncedValue } from '@mantine/hooks';
import { FieldValues } from 'react-hook-form';
import { qraft } from '@/lib/qraft';

export function UomAsyncSelect<T extends FieldValues>(
  props: Omit<AsyncSelectProps<T>, 'firstRender'>
) {
  const firstRender = useRef(true);
  const [searchValue, setSearchValue] = useState('');
  const [debouncedSearchValue] = useDebouncedValue(searchValue, 250);
  const { data, isLoading } = qraft.measurement.listUoms.useQuery(
    {
      query: {
        page: 1,
        page_size: 30,
      },
    },
    {
      enabled: !!firstRender.current || debouncedSearchValue.length > 0,
    }
  );

  useEffect(() => {
    firstRender.current = false;
  }, []);

  const options = data?.data.map((uom) => ({
    id: uom.id,
    name: uom.name,
  }));

  return (
    <AsyncSelect
      {...props}
      withCheckIcon
      checkIconPosition="right"
      firstRender={firstRender.current}
      variant="underline"
      placeholder="Chọn đơn vị tính"
      isLoading={isLoading}
      size="sm"
      clearable
      data={options}
      label={props.label}
      onSearchChange={setSearchValue}
    />
  );
}

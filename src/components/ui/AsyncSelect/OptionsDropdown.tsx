import {
  ComboboxItem,
  ComboboxLikeRenderOptionInput,
  ComboboxParsedItem,
  ComboboxParsedItemGroup,
} from './AsyncSelect';
import { CheckIcon, Combobox, Group, ScrollArea, ScrollAreaProps } from '@mantine/core';
import { validateOptions } from './validate-options';

export interface OptionsGroup {
  group: string;
  items: ComboboxItem[];
}

export type OptionsData = (ComboboxItem | OptionsGroup)[];

interface OptionProps {
  data: ComboboxItem | OptionsGroup;
  withCheckIcon?: boolean;
  value?: ComboboxItem | ComboboxItem[] | null;
  checkIconPosition?: 'left' | 'right';
  unstyled: boolean | undefined;
  renderOption?: (input: ComboboxLikeRenderOptionInput<any>) => React.ReactNode;
}

function isValueChecked(
  value: ComboboxItem | ComboboxItem[] | undefined | null,
  optionValue: ComboboxItem
) {
  return Array.isArray(value)
    ? value.some((item) => item.id === optionValue.id)
    : value?.id === optionValue.id;
}

function isOptionsGroup(data: ComboboxItem | OptionsGroup) {
  return typeof data === 'object' && 'group' in data;
}

function Option({
  data,
  withCheckIcon,
  value,
  checkIconPosition,
  unstyled,
  renderOption,
}: OptionProps) {
  if (!isOptionsGroup(data)) {
    const checked = isValueChecked(value, data);
    const check = withCheckIcon && checked && <CheckIcon size={10} color="gray" />;

    const defaultContent = (
      <Group gap="xs">
        {checkIconPosition === 'left' && check}
        <span>{data.name}</span>
        {checkIconPosition === 'right' && check}
      </Group>
    );

    return (
      <Combobox.Option
        value={data.id}
        disabled={data.disabled}
        data-reverse={checkIconPosition === 'right' || undefined}
        data-checked={checked || undefined}
        aria-selected={checked}
        active={checked}
      >
        {typeof renderOption === 'function'
          ? renderOption({ option: data, checked })
          : defaultContent}
      </Combobox.Option>
    );
  }

  const options = data.items.map((item) => (
    <Option
      data={item}
      value={value}
      key={item.id}
      unstyled={unstyled}
      withCheckIcon={withCheckIcon}
      checkIconPosition={checkIconPosition}
      renderOption={renderOption}
    />
  ));

  return <Combobox.Group label={data.group}>{options}</Combobox.Group>;
}

export function isEmptyComboboxData(data: ComboboxParsedItem[]) {
  if (data.length === 0) {
    return true;
  }

  for (const item of data) {
    if (!('group' in item)) {
      return false;
    }

    if ((item as ComboboxParsedItemGroup).items.length > 0) {
      return false;
    }
  }

  return true;
}

export interface OptionsDropdownProps {
  data: ComboboxParsedItem[];
  search: string | undefined;
  limit: number | undefined;
  withScrollArea: boolean | undefined;
  maxDropdownHeight: number | string | undefined;
  hidden?: boolean;
  hiddenWhenEmpty?: boolean;
  withCheckIcon?: boolean;
  value?: ComboboxItem | ComboboxItem[] | null;
  checkIconPosition?: 'left' | 'right';
  nothingFoundMessage?: React.ReactNode;
  unstyled: boolean | undefined;
  labelId: string | undefined;
  'aria-label': string | undefined;
  renderOption?: (input: ComboboxLikeRenderOptionInput<any>) => React.ReactNode;
  scrollAreaProps: ScrollAreaProps | undefined;
  onSearchChange: (value: string) => void;
  searchPlaceholder?: string;
  isLoading?: boolean;
  isMultiSelect?: boolean;
}

export function OptionsDropdown({
  data,
  hidden,
  hiddenWhenEmpty,
  search,
  maxDropdownHeight,
  withScrollArea = true,
  withCheckIcon = false,
  value,
  checkIconPosition,
  nothingFoundMessage = 'Không tìm thấy kết quả',
  unstyled,
  labelId,
  renderOption,
  scrollAreaProps,
  'aria-label': ariaLabel,
  onSearchChange,
  isLoading,
}: OptionsDropdownProps) {
  validateOptions(data);

  const isEmpty = isEmptyComboboxData(data);

  const options = data.map((item) => (
    <Option
      data={item}
      key={isOptionsGroup(item) ? item.group : item.id}
      withCheckIcon={withCheckIcon}
      value={value}
      checkIconPosition={checkIconPosition}
      unstyled={unstyled}
      renderOption={renderOption}
    />
  ));

  return (
    <Combobox.Dropdown hidden={hidden || (hiddenWhenEmpty && isEmpty)}>
      <Combobox.Search
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Nhập giá trị tìm kiếm"
      />
      <Combobox.Options labelledBy={labelId} aria-label={ariaLabel}>
        {withScrollArea ? (
          <ScrollArea.Autosize
            mah={maxDropdownHeight ?? 220}
            type="scroll"
            scrollbarSize="var(--combobox-padding)"
            offsetScrollbars="y"
            {...scrollAreaProps}
          >
            {options}
          </ScrollArea.Autosize>
        ) : (
          options
        )}
        {isEmpty && !isLoading && nothingFoundMessage && (
          <Combobox.Empty>{nothingFoundMessage}</Combobox.Empty>
        )}
        {isLoading && <Combobox.Empty>Đang tìm kiếm...</Combobox.Empty>}
      </Combobox.Options>
    </Combobox.Dropdown>
  );
}

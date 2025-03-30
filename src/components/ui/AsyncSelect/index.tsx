import {
  Combobox,
  getRefProp,
  Input,
  InputBase,
  SelectFactory,
  useCombobox,
  useResolvedStylesApi,
  type SelectProps as $SelectProps,
} from '@mantine/core';
import { getParsedComboboxData } from './get-parsed-combobox-data';
import { ComboboxData, ComboboxItem } from './AsyncSelect';
import { getOptionsLockup } from './get-options-lockup';
import { useId, useUncontrolled } from '@mantine/hooks';
import { OptionsDropdown } from './OptionsDropdown';
import { forwardRef, useMemo } from 'react';

export interface AsyncSelectProps
  extends Omit<$SelectProps, 'value' | 'onChange' | 'defaultValue' | 'data'> {
  isLoading?: boolean;
  firstRender: boolean;
  defaultSelectedOption?: ComboboxItem | null;
  onChange?: (value: ComboboxItem | null) => void;
  defaultValue?: ComboboxItem | null;
  value?: ComboboxItem | null;
  data?: ComboboxData;
}

export const AsyncSelect = forwardRef((props: AsyncSelectProps, ref) => {
  const {
    classNames,
    itemRef,
    styles,
    unstyled,
    vars,
    dropdownOpened,
    defaultDropdownOpened,
    onDropdownClose,
    onDropdownOpen,
    onFocus,
    onBlur,
    onClick,
    onChange,
    data,
    firstRender,
    value,
    defaultValue,
    defaultSelectedOption,
    selectFirstOptionOnChange,
    onOptionSubmit,
    comboboxProps,
    readOnly,
    disabled,
    filter,
    limit,
    withScrollArea,
    maxDropdownHeight,
    size,
    searchable,
    rightSection,
    checkIconPosition,
    withCheckIcon,
    nothingFoundMessage,
    name,
    form,
    searchValue,
    defaultSearchValue,
    onSearchChange,
    allowDeselect,
    error,
    rightSectionPointerEvents,
    id,
    clearable,
    clearButtonProps,
    hiddenInputProps,
    renderOption,
    onClear,
    autoComplete,
    scrollAreaProps,
    isLoading,
    placeholder,
    ...others
  } = props;

  const parsedData = useMemo(() => getParsedComboboxData(data), [data]);

  const optionsLockup = useMemo(() => getOptionsLockup(parsedData), [parsedData]);

  const _id = useId(id);

  const [_value, setValue, controlled] = useUncontrolled({
    value,
    defaultValue,
    finalValue: null,
    onChange,
  });

  const [search, setSearch] = useUncontrolled({
    value: searchValue,
    defaultValue: defaultSearchValue,
    finalValue: '',
    onChange: onSearchChange,
  });

  const combobox = useCombobox({
    opened: dropdownOpened,
    defaultOpened: defaultDropdownOpened,
    onDropdownOpen: () => {
      combobox.focusSearchInput();
    },
    onDropdownClose: () => {
      combobox.resetSelectedOption();
      onDropdownClose?.();
      setSearch('');
    },
  });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<SelectFactory>({
    props,
    styles,
    classNames,
  });

  const clearButton = clearable && !!_value && !disabled && !readOnly && (
    <Combobox.ClearButton
      size={size as string}
      {...clearButtonProps}
      onClear={() => {
        setValue(null, null);
        onClear?.();
      }}
    />
  );

  return (
    <>
      <Combobox
        store={combobox}
        __staticSelector="AsyncSelect"
        size={size}
        styles={resolvedStyles}
        readOnly={readOnly}
        classNames={resolvedClassNames}
        disabled={disabled}
        onOptionSubmit={(val) => {
          onOptionSubmit?.(val);

          const optionLockup = allowDeselect
            ? optionsLockup[val].id === _value?.id
              ? null
              : optionsLockup[val]
            : optionsLockup[val];

          const nextValue = optionLockup ? optionLockup : null;

          nextValue !== _value && setValue(nextValue, optionLockup);
          !controlled && setSearch(typeof nextValue === 'string' ? optionLockup?.name || '' : '');
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target targetType="button">
          <InputBase
            id={_id}
            size={size}
            ref={getRefProp(ref)}
            component="button"
            type="button"
            rightSection={rightSection || clearButton}
            __staticSelector="AsyncSelect"
            disabled={disabled}
            rightSectionPointerEvents={rightSectionPointerEvents || (clearButton ? 'all' : 'none')}
            pointer
            onClick={() => {
              combobox.toggleDropdown();
            }}
            classNames={resolvedClassNames}
            variant={others.variant}
            error={error}
          >
            {_value?.name}
            {!_value && <Input.Placeholder>{placeholder}</Input.Placeholder>}
          </InputBase>
        </Combobox.Target>
        <Combobox.Dropdown>
          <OptionsDropdown
            data={parsedData}
            search={search}
            value={_value}
            limit={limit}
            withScrollArea={withScrollArea}
            maxDropdownHeight={maxDropdownHeight}
            checkIconPosition={checkIconPosition}
            withCheckIcon={withCheckIcon}
            unstyled={unstyled}
            labelId={others.label ? `${_id}-label` : undefined}
            aria-label={others.label ? undefined : others['aria-label']}
            scrollAreaProps={scrollAreaProps}
            nothingFoundMessage={nothingFoundMessage}
            onSearchChange={(value) => {
              combobox.updateSelectedOptionIndex();
              setSearch(value);
            }}
            renderOption={renderOption}
            isLoading={isLoading}
          />
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
});

AsyncSelect.displayName = 'AsyncSelect';

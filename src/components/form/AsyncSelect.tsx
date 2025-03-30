import {
  AsyncSelect as $AsyncSelect,
  type AsyncSelectProps as $AsyncSelectProps,
} from '@/components/ui/AsyncSelect';
import { useController, type FieldValues, type UseControllerProps } from 'react-hook-form';
import asyncSelectClasses from '@/components/ui/AsyncSelect/AsyncSelect.module.css';
import inputClasses from '@/components/ui/Input/Input.module.css';

export type AsyncSelectProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$AsyncSelectProps, 'value' | 'defaultValue'>;

export function AsyncSelect<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: AsyncSelectProps<T>) {
  const {
    field: { value, onChange: fieldOnChange, ...field },
    fieldState,
  } = useController<T>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });

  return (
    <$AsyncSelect
      classNames={{
        input: inputClasses.input,
        wrapper: inputClasses.wrapper,
        root: inputClasses.root,
        dropdown: asyncSelectClasses.dropdown,
        option: asyncSelectClasses.option,
        options: asyncSelectClasses.options,
      }}
      value={value}
      onChange={(e) => {
        fieldOnChange(e);
        onChange?.(e);
      }}
      onClear={() => {
        fieldOnChange(null);
      }}
      error={fieldState.error?.message}
      {...field}
      {...props}
    />
  );
}

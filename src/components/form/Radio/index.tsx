import {
  Radio as $Radio,
  type RadioProps as $RadioProps,
  RadioCard as $RadioCard,
  RadioIndicator as $RadioIndicator,
} from '@mantine/core';
import { useController, type FieldValues, type UseControllerProps } from 'react-hook-form';
import { RadioGroup } from './RadioGroup';

export type RadioProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$RadioProps, 'value' | 'defaultValue'>;

export function Radio<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: RadioProps<T>) {
  const {
    field: { value, onChange: fieldOnChange, ...field },
  } = useController<T>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });

  return (
    <$Radio
      value={value}
      onChange={(e) => {
        fieldOnChange(e);
        onChange?.(e);
      }}
      {...field}
      {...props}
    />
  );
}

Radio.Group = RadioGroup;
Radio.Item = $Radio;
Radio.Card = $RadioCard;
Radio.Indicator = $RadioIndicator;

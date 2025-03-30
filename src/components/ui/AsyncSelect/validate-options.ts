import { isOptionsGroup } from '@mantine/core';

export function validateOptions(options: any[], valuesSet = new Set()) {
  if (!Array.isArray(options)) {
    return;
  }

  for (const option of options) {
    if (isOptionsGroup(option)) {
      validateOptions(option.items, valuesSet);
    } else {
      if (typeof option.id === 'undefined') {
        throw new Error('[@mantine/core] Each option must have value property');
      }

      if (typeof option.id !== 'string') {
        throw new Error(
          `[@mantine/core] Option value must be a string, other data formats are not supported, got ${typeof option.id}`
        );
      }

      if (valuesSet.has(option.id)) {
        throw new Error(
          `[@mantine/core] Duplicate options are not supported. Option with value "${option.id}" was provided more than once`
        );
      }

      valuesSet.add(option.id);
    }
  }
}

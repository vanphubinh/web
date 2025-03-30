import {
  ComboboxData,
  ComboboxItem,
  ComboboxItemGroup,
  ComboboxParsedItem,
  ComboboxParsedItemGroup,
  ComboboxStringData,
  ComboboxStringItem,
} from './AsyncSelect';

function parseItem(
  item: string | ComboboxItem | ComboboxStringItem | ComboboxItemGroup
): ComboboxItem | ComboboxParsedItemGroup {
  if (typeof item === 'string') {
    return { id: item, name: item };
  }

  if ('id' in item && !('name' in item)) {
    return { id: item.id, name: item.id, disabled: item.disabled };
  }

  if (typeof item === 'number') {
    return {
      id: (item as number).toString(),
      name: (item as number).toString(),
    };
  }

  if ('group' in item) {
    return {
      group: item.group,
      items: item.items.map((i) => parseItem(i) as ComboboxItem),
    };
  }

  return item;
}

export function getParsedComboboxData(
  data: ComboboxData | ComboboxStringData | undefined
): ComboboxParsedItem[] {
  if (!data) {
    return [];
  }

  return data.map((item) => parseItem(item as ComboboxItem));
}

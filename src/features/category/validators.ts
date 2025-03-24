import { number, object, optional } from 'valibot';

export const ListPaginatedCategoriesParamsSchema = object({
  page: optional(number(), 1),
  page_size: optional(number(), 30),
});

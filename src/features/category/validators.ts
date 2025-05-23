import { number, object, optional } from 'valibot';

export const ListPaginatedCategoriesParamsSchema = object({
  page: optional(number(), 1),
  per_page: optional(number(), 30),
});

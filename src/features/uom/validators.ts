import { number, object, optional } from 'valibot';

export const ListPaginatedUomsParamsSchema = object({
  page: optional(number(), 1),
  page_size: optional(number(), 30),
});

import { InferOutput, minLength, number, object, optional, pipe, string } from 'valibot';

export const ListPaginatedUomsParamsSchema = object({
  page: optional(number(), 1),
  page_size: optional(number(), 30),
});

export const CreateUomSchema = object({
  name: pipe(string(), minLength(1)),
});

export type CreateUomPayload = InferOutput<typeof CreateUomSchema>;

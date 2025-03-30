import {
  enum_,
  InferOutput,
  minLength,
  number,
  object,
  minValue,
  pipe,
  string,
  transform,
  InferInput,
  nullable,
} from 'valibot';

export enum ProductType {
  GOODS = 'goods',
  SERVICE = 'service',
}

export enum ProductSubtype {
  STANDARD = 'standard',
  TO_PRINT_PACKAGING = 'to_print_packaging',
  PRINTING_MOULD = 'printing_mould',
}

export const CreateProductSchema = object({
  name: pipe(string(), minLength(1, 'Tên sản phẩm không được để trống')),
  productType: enum_(ProductType),
  productSubtype: enum_(ProductSubtype),
  uomId: pipe(
    object(
      {
        id: string(),
        name: string(),
      },
      'Đơn vị tính không hợp lệ'
    ),
    transform((value) => value.id)
  ),
  categoryId: pipe(
    nullable(
      object({
        id: string(),
        name: string(),
      })
    ),
    transform((value) => value?.id ?? null)
  ),
  price: pipe(
    number(),
    minValue(0),
    transform((value) => String(value))
  ),
  cost: pipe(
    number(),
    minValue(0),
    transform((value) => String(value))
  ),
  description: string(),
});

export type CreateProductInput = InferInput<typeof CreateProductSchema>;
export type CreateProductOuput = InferOutput<typeof CreateProductSchema>;

import { createStore } from '@xstate/store';

export enum ProductType {
  GOODS = 'goods',
  SERVICE = 'service',
  UNKNOWN = 'unknown',
}

export const createProductStore = createStore({
  context: { productType: ProductType.UNKNOWN },
  on: {
    openGoodsForm: (context) => ({
      ...context,
      productType: ProductType.GOODS,
    }),
    openServiceForm: (context) => ({
      ...context,
      productType: ProductType.SERVICE,
    }),
    backToProductType: (context) => ({
      ...context,
      productType: ProductType.UNKNOWN,
    }),
  },
});

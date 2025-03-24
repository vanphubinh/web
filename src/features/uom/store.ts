import { createStore } from '@xstate/store';

export const uomStore = createStore({
  context: { createModal: false },
  on: {
    openCreateModal: (context) => ({
      ...context,
      createModal: true,
    }),
    closeCreateModal: (context) => ({
      ...context,
      createModal: false,
    }),
  },
});

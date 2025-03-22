import { requestFn } from '@openapi-qraft/react';
import { queryClient } from '@/lib/query-client';
import { createAPIClient } from '@/api';

export const qraft = createAPIClient({
  requestFn,
  queryClient,
  baseUrl: '/api',
});

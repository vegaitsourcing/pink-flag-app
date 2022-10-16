import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_API_URL = 'http://localhost:8000/api/v2/';

// initialize an empty api service that we'll inject endpoints into later as needed
export const rootApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
  endpoints: () => ({}),
});

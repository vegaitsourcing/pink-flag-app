import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const BASE_URI = 'https://pinkflag.codeforacause.rs';
const BASE_API_URL = 'https://pinkflag.codeforacause.rs/api/';

// initialize an empty api service that we'll inject endpoints into later as needed
export const rootApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
  endpoints: () => ({}),
});

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_API_URL = 'http://192.168.21.202:8000/api/v2/';

type Test = {
  name: string;
};

export const blogsApi = createApi({
  reducerPath: 'blogsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
  endpoints: builder => ({
    getUserById: builder.query<Test, number>({
      query: (id: number) => `pages/${id}/?format=json`,
    }),
  }),
});

// export const { useGetUserByIdQuery } = blogsApi;

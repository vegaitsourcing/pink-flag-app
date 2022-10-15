import { rootApi } from './rootApi';

export const usersApi = rootApi.injectEndpoints({
  endpoints: builder => ({
    getUserById: builder.query<unknown, number>({
      query: (id: number) => `pages/${id}`,
    }),
  }),
});

export const { useGetUserByIdQuery } = usersApi;

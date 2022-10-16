import { BlogModel } from '@pf/models';
import { PageableModel } from 'src/models/PageableModel';
import { rootApi } from './rootApi';

export const blogApi = rootApi.injectEndpoints({
  endpoints: builder => ({
    getAllBlogs: builder.query<PageableModel<BlogModel>, { page: number; size: number }>({
      query: ({ page, size }) => `blogs?page=${page}&size=${size}`,
    }),
  }),
});

export const { useGetAllBlogsQuery } = blogApi;

import { BlogModel } from '@pf/models';
import { PageableModel } from 'src/models/PageableModel';
import { rootApi } from './rootApi';

export const blogApi = rootApi.injectEndpoints({
  endpoints: builder => ({
    getAllBlogs: builder.query<PageableModel<BlogModel>, { page: number; size: number; category: string }>({
      query: ({ page, size, category }) => `blogs?type=blog.BlogPage&page=${page}&size=${size}`,
    }),
    getFeaturedBlog: builder.query<BlogModel, void>({
      query: () => `featuredBlog`,
    }),
  }),
});

export const { useGetAllBlogsQuery, useGetFeaturedBlogQuery } = blogApi;

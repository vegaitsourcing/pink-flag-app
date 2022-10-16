import { BlogModel } from '@pf/models';
import { BlogDetailsModel } from 'src/models/BlogDetailsModel';
import { PageableModel } from 'src/models/PageableModel';
import { rootApi } from './rootApi';

export const blogApi = rootApi.injectEndpoints({
  endpoints: builder => ({
    getAllBlogs: builder.query<PageableModel<BlogModel>, { page: number; size: number; category: string }>({
      query: ({ page, size, category }) => `pages?type=blog.BlogPage&page=${page}&size=${size}&category=${category}`,
    }),
    getFeaturedBlog: builder.query<BlogModel[], void>({
      query: () => `pages?type=blog.BlogPage&featured=True`,
    }),
    getBlogById: builder.query<BlogDetailsModel, number>({
      query: id => `pages/${id}`,
    }),
  }),
});

export const { useGetAllBlogsQuery, useGetFeaturedBlogQuery } = blogApi;

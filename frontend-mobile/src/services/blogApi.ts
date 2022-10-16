import { BlogModel } from '@pf/models';
import { BlogDetailsModel } from 'src/models/BlogDetailsModel';
import { PageableModel } from 'src/models/PageableModel';
import { rootApi } from './rootApi';

export const blogApi = rootApi.injectEndpoints({
  endpoints: builder => ({
    getAllBlogs: builder.query<PageableModel<BlogModel>, { page: number; size: number; category: string }>({
      query: ({ page, size, category }) =>
        `pages?type=blog.BlogPage&offset=${page}&limit=${size}&category=${category}&fields=image&order=-first_published_at`,
    }),
    getFeaturedBlog: builder.query<PageableModel<BlogModel>, void>({
      query: () => `pages?type=blog.BlogPage&featured=true&fields=image&order=-first_published_at`,
    }),
    getBlogById: builder.query<BlogDetailsModel, number>({
      query: id => `pages/${id}?fields=image`,
    }),
  }),
});

export const { useGetAllBlogsQuery, useGetFeaturedBlogQuery } = blogApi;

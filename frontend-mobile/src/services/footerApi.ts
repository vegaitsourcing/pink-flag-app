import { FooterModel } from '@pf/models';
import { rootApi } from './rootApi';

type GetFooterResponse = {
  items: FooterModel[];
};

export const footerApi = rootApi.injectEndpoints({
  endpoints: builder => ({
    getFooter: builder.query<FooterModel, void>({
      query: () => `pages/?type=blog.FooterPage&fields=*&format=json`,
      transformResponse: (response: GetFooterResponse) => response.items[0],
    }),
  }),
});

export const { useGetFooterQuery } = footerApi;

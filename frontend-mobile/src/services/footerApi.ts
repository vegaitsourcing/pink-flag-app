import { rootApi } from './rootApi';

export type Footer = {
  title: string;
  location: string;
  email: string;
  instagram_profile_url: string;
  facebook_profile_url: string;
  copytight: string;
};

export type GetFooterResponse = {
  items: Footer[];
};

export const footerApi = rootApi.injectEndpoints({
  endpoints: builder => ({
    getFooter: builder<GetFooterResponse, void>({
      query: () => `pages/?type=blog.FooterPage&fields=*`,
    }),
  }),
});

export const { useGetFooterQuery } = footerApi;

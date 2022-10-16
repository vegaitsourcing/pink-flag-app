import { DonationsModel, DonationsModuleModel } from '@pf/models';
import { rootApi } from './rootApi';

type GetDonationsResponse = {
  items: DonationsModel[];
};

type GetDonationsModuleResponse = {
  items: DonationsModuleModel[];
};

export const donationsApi = rootApi.injectEndpoints({
  endpoints: builder => ({
    getDonationsPage: builder.query<DonationsModel, void>({
      query: () => `pages/?type=blog.DonationPage&fields=*&format=json`,
      transformResponse: (response: GetDonationsResponse) => response.items[0],
    }),
    getDonationsModule: builder.query<DonationsModuleModel, void>({
      query: () => `pages/?type=blog.DonationsModule&fields=*&format=json`,
      transformResponse: (response: GetDonationsModuleResponse) => response.items[0],
    }),
  }),
});

export const { useGetDonationsPageQuery, useGetDonationsModuleQuery } = donationsApi;

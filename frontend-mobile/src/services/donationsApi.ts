import { DonationsModel } from '@pf/models';
import { rootApi } from './rootApi';

type GetDonationsResponse = {
  items: DonationsModel[];
};

export const donationsApi = rootApi.injectEndpoints({
  endpoints: builder => ({
    getDonationsPage: builder.query<DonationsModel, void>({
      query: () => `pages/?type=blog.DonationPage&fields=*&format=json`,
      transformResponse: (response: GetDonationsResponse) => response.items[0],
    }),
  }),
});

export const { useGetDonationsPageQuery } = donationsApi;

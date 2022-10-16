import React from 'react';
import { DonateBanner, Footer, HomeCalendar, HomeNews, Intro } from '@pf/components';
import { ScrollView } from 'react-native-gesture-handler';
import { useGetUserByIdQuery } from '@pf/services';

export const HomeScreen: React.FC = () => {
  const { data, error, isLoading } = useGetUserByIdQuery(33);

  console.log('IsLoading', isLoading);
  console.log('data', data);
  console.log('error', error);

  return (
    <ScrollView>
      <Intro heading="Pink Flag" subheading="Subheading text" buttonData={{ link: '/', title: 'Saznaj vise o nama' }} />
      <HomeCalendar title="Moj Kalendar" subtitle="Lorem ipsum dolor sit amet" />
      <HomeNews />
      <DonateBanner title="Doniraj" description="Podrzi akciju i DONIRAJ" buttonTitle="Doniraj" />
      <Footer />
    </ScrollView>
  );
};

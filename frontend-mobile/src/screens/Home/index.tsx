import { View } from 'react-native';
import React from 'react';
import { HomeCalendar, Intro } from '@pf/components';
import { useGetUserByIdQuery } from '@pf/services';

export const HomeScreen: React.FC = () => {
  const { data, error, isLoading } = useGetUserByIdQuery(33);

  console.log('IsLoading', isLoading);
  console.log('data', data);
  console.log('error', error);

  return (
    <View>
      <Intro heading="Pink Flag" subheading="Subheading text" buttonData={{ link: '/', title: 'Saznaj vise o nama' }} />
      <HomeCalendar title="Moj Kalendar" subtitle="Lorem ipsum dolor sit amet" />
    </View>
  );
};

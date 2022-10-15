import { View } from 'react-native';
import React from 'react';
import { HomeCalendar, Intro } from '@pf/components';

export const HomeScreen: React.FC = () => {
  return (
    <View>
      <Intro heading="Pink Flag" subheading="Subheading text" buttonData={{ link: '/', title: 'Saznaj vise o nama' }} />
      <HomeCalendar title="Moj Kalendar" subtitle="Lorem ipsum dolor sit amet" />
    </View>
  );
};

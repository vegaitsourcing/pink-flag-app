import React from 'react';
import { DonateBanner, Footer, HomeCalendar, HomeNews, Intro } from '@pf/components';
import { ScrollView } from 'react-native-gesture-handler';

export const HomeScreen: React.FC = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Intro
        heading="Pink Flag"
        subheading="Dobrodošli na PINK FLAG aplikaciju Ženske inicijative koja radi na otklanjanju menstrualnog siromaštva i informisanju zajednice o potrebi besplatnih menstrualnih uložaka u svim obrazovnim ustanovama širom Republike Srbije."
        buttonData={{ link: '/', title: 'Saznaj vise o nama' }}
      />
      <HomeCalendar
        title="Moj Kalendar"
        subtitle="Lorem ipsum dolor sit amet consectetur adipiscing, elit lacus pellentesque penatibus "
      />
      <HomeNews />
      <DonateBanner />
      <Footer />
    </ScrollView>
  );
};

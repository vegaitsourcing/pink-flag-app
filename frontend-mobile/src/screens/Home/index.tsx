import React from 'react';
import { DonateBanner, Footer, HomeCalendar, Intro } from '@pf/components';
import { ScrollView } from 'react-native-gesture-handler';

export const HomeScreen: React.FC = () => {
  return (
    <ScrollView>
      <Intro heading="Pink Flag" subheading="Subheading text" buttonData={{ link: '/', title: 'Saznaj vise o nama' }} />
      <HomeCalendar title="Moj Kalendar" subtitle="Lorem ipsum dolor sit amet" />
      <DonateBanner title="Doniraj" description="Podrzi akciju i DONIRAJ" buttonTitle="Doniraj" />
      <Footer
        copyright="© 2022 Pink Flag. All rights reserved."
        email="zenskainicijativa@gmail.com"
        location="Trg Slobode 3, Novi Sad"
        instagramLink="https://instagram.com"
        facebookLink="https://facebook.com"
      />
    </ScrollView>
  );
};

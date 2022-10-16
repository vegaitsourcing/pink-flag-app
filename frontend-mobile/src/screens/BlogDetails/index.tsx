import React, { useEffect } from 'react';
import { DonateBanner, Footer } from '@pf/components';
import { ScrollView } from 'react-native-gesture-handler';
import { BlogRoutes } from '@pf/constants';
import { BlogScreenProps } from '../../navigation/BlogNavigator';

const { BLOG_DETAILS } = BlogRoutes;

export const BlogDetailsScreen: React.FC<BlogScreenProps<typeof BLOG_DETAILS>> = ({ route }) => {
  useEffect(() => {
    const id = route.params.id;
    if (id) {
      console.log('get data by id ' + String(id));
    }
  }, [route]);

  return (
    <ScrollView>
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

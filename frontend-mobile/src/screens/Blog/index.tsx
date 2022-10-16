import React from 'react';
import { BlogListModule, BlogModule, DonateBanner, Footer } from '@pf/components';
import { ScrollView } from 'react-native-gesture-handler';

export const BlogScreen: React.FC = () => {
  return (
    <ScrollView>
      <BlogModule />
      <BlogListModule></BlogListModule>
      <DonateBanner title="Doniraj" description="Podrzi akciju i DONIRAJ" buttonTitle="Doniraj" />
      <Footer />
    </ScrollView>
  );
};

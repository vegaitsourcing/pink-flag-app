import React from 'react';
import { BlogModel } from '@pf/models';
import { BlogListModule, BlogModule, BlogSmallModule, DonateBanner, Footer } from '@pf/components';
import { ScrollView } from 'react-native-gesture-handler';

export const BlogScreen: React.FC = () => {
  const mockedBlogModel: BlogModel = {
    title: 'Prva srednja škola koja je uvela besplatne higijenske uloške',
    date: 'April 22. 2022.',
    imageUrl: '../../assets/images/blog-card-example.png',
    type: 'vest',
  };

  return (
    <ScrollView>
      <BlogModule blogModel={mockedBlogModel}></BlogModule>
      <BlogListModule></BlogListModule>
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

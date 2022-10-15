import { View } from 'react-native';
import React from 'react';
import { BlogModel } from '@pf/models';
import { BlogModule, BlogSmallModule } from '@pf/components';

export const BlogScreen: React.FC = () => {
  const mockedBlogModel: BlogModel = {
    title: 'Prva srednja škola koja je uvela besplatne higijenske uloške',
    date: 'April 22. 2022.',
    imageUrl: '../../assets/images/blog-card-example.png',
    type: 'vest',
  };

  return (
    <View>
      <BlogModule blogModel={mockedBlogModel}></BlogModule>
      <BlogSmallModule blogModel={mockedBlogModel}></BlogSmallModule>
    </View>
  );
};

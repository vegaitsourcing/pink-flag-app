import React, { useState } from 'react';
import { ContainerView } from '../ContainerView';
import { View, Text } from 'react-native';
import { CustomText } from '../CustomText';
import { BlogSmallModule } from '../BlogSmallModule';
import { BlogModel } from '@pf/models';
import { useTheme } from '@emotion/react';

const mockedBlogModel: BlogModel = {
  title: 'Prva srednja škola koja je uvela besplatne higijenske uloške',
  date: 'April 22. 2022.',
  imageUrl: '../../assets/images/blog-card-example.png',
  type: 'vest',
};

export const HomeNews: React.FC = () => {
  const [contentList] = useState<BlogModel[]>([mockedBlogModel, mockedBlogModel]);
  const theme = useTheme();
  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: theme.spacing.$1Number }}>
        <CustomText>Najnovije objave</CustomText>
        <CustomText>Pogledaj sve</CustomText>
      </View>
      {contentList.map((el, index) => (
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        <BlogSmallModule key={index} blogModel={el} />
      ))}
    </View>
  );
};

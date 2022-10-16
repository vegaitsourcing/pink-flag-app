import React, { useState } from 'react';
import { View, Pressable } from 'react-native';
import { CustomText } from '../CustomText';
import { BlogSmallModule } from '../BlogSmallModule';
import { BlogModel } from '@pf/models';
import { useTheme } from '@emotion/react';
import { useNavigation } from '@react-navigation/native';
import { HomeNavigatorParams } from '@pf/constants';
import { StackNavigationProp } from '@react-navigation/stack';

const mockedBlogModel: BlogModel = {
  id: 'home-1',
  title: 'Prva srednja škola koja je uvela besplatne higijenske uloške',
  date: 'April 22. 2022.',
  imageUrl: '../../assets/images/blog-card-example.png',
  type: 'vest',
};

export const HomeNews: React.FC = () => {
  const { navigate } = useNavigation<StackNavigationProp<HomeNavigatorParams>>();

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
        <Pressable key={index} onPress={() => navigate('blog_details', { id: el.id })}>
          <BlogSmallModule blogModel={el} />
        </Pressable>
      ))}
    </View>
  );
};

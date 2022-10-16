import React from 'react';
import { View, Pressable, ActivityIndicator } from 'react-native';
import { CustomText } from '../CustomText';
import { BlogSmallModule } from '../BlogSmallModule';
import { useTheme } from '@emotion/react';
import { useNavigation } from '@react-navigation/native';
import { HomeNavigatorParams } from '@pf/constants';
import { StackNavigationProp } from '@react-navigation/stack';
import { BASE_URI } from '../../services/rootApi';
import { useGetAllBlogsQuery } from '@pf/services';

export const HomeNews: React.FC = () => {
  const { navigate } = useNavigation<StackNavigationProp<HomeNavigatorParams>>();
  const theme = useTheme();

  const { data, isLoading } = useGetAllBlogsQuery({ category: 'BLOG', page: 0, size: 5 });

  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: theme.spacing.$1Number }}>
        <CustomText>Najnovije objave</CustomText>
        <CustomText>Pogledaj sve</CustomText>
      </View>
      {isLoading ? (
        <ActivityIndicator size="large" color={theme.colors.primary} />
      ) : data && data.items.length ? (
        data?.items.map((el, index) => (
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          <Pressable key={index} onPress={() => navigate('blog_details', { id: el.id })}>
            <BlogSmallModule
              title={el.title}
              date={el.meta.first_published_at}
              image={BASE_URI + el.image?.meta?.download_url ?? ''}
            />
          </Pressable>
        ))
      ) : (
        <>
          <CustomText style={{ textAlign: 'center', margin: 20 }}>Nema objava.</CustomText>
        </>
      )}
    </View>
  );
};

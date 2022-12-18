/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { BlogCard } from './utils/styles';
import { Image, View, StyleSheet, Pressable } from 'react-native';
import { CustomText } from '../CustomText';
import { AppTheme } from '@pf/theme';
import { useGetFeaturedBlogQuery } from '@pf/services';
import { BASE_URI } from '../../services/rootApi';
import { ActivityIndicatorContainer } from '@pf/components';
import { BlogNavigatorParams, IS_IOS } from '@pf/constants';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

export const BlogModule: React.FC = () => {
  const { data, isLoading } = useGetFeaturedBlogQuery();
  const { navigate } = useNavigation<StackNavigationProp<BlogNavigatorParams>>();

  return isLoading ? (
    <ActivityIndicatorContainer />
  ) : data && data.meta.total_count > 0 ? (
    <Pressable
      onPress={() => {
        navigate('blog_details', { id: data.items[0].id });
      }}>
      <BlogCard style={styles.BlogCardStyle}>
        <View style={styles.cardContainer}>
          <Image
            style={styles.cardImage}
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            source={{ uri: BASE_URI + data.items[0].image.meta.download_url }}
          />
          <View style={styles.cardBody}>
            <CustomText style={styles.label}>{data.items[0].meta.type}</CustomText>
            <CustomText style={styles.date}>
              {new Date(data.items[0].meta.first_published_at).toDateString()}
            </CustomText>
            <CustomText style={styles.titleText}>{data.items[0].title}</CustomText>
          </View>
        </View>
      </BlogCard>
    </Pressable>
  ) : (
    <></>
  );
};

const styles = StyleSheet.create({
  BlogCardStyle: IS_IOS
    ? {
        backgroundColor: 'white',
        shadowRadius: 4.65,
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.25,
      }
    : {
        backgroundColor: 'white',
        elevation: 6,
      },
  cardImage: {
    width: '100%',
    height: 180,
    borderRadius: 20,
  },
  cardContainer: {
    borderRadius: 20,
    backgroundColor: AppTheme.colors.white,
  },
  cardBody: {
    padding: 10,
  },
  label: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginTop: 10,
    borderRadius: 5,
    letterSpacing: 1,
    marginBottom: 5,
    textTransform: 'uppercase',
    color: AppTheme.colors.white,
    fontSize: AppTheme.fontSize.$1Number,
    backgroundColor: AppTheme.colors.label,
    alignSelf: 'flex-start',
  },
  date: {
    fontSize: AppTheme.fontSize.$2Number,
    marginBottom: 10,
    color: AppTheme.colors.description,
  },
  titleText: {
    color: AppTheme.colors.primary,
    fontSize: 18,
    marginBottom: 12,
    fontWeight: '500',
  },
});

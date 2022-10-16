/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { BlogCard } from './utils/styles';
import { Image, View, StyleSheet, ActivityIndicator } from 'react-native';
import { CustomText } from '../CustomText';
import { AppTheme } from '@pf/theme';
import { useGetFeaturedBlogQuery } from '@pf/services';
import { useTheme } from '@emotion/react';
import { BASE_URI } from '../../services/rootApi';

export const BlogModule: React.FC = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetFeaturedBlogQuery();

  return isLoading ? (
    <View>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </View>
  ) : data ? (
    <BlogCard style={styles.BlogCardStyle}>
      <View style={styles.cardContainer}>
        <Image style={styles.cardImage} source={{ uri: BASE_URI + data[0].image.meta.download_url }}></Image>
        {data && data.length && (
          <View style={styles.cardBody}>
            <CustomText style={styles.label}>{data[0].meta.type}</CustomText>
            <CustomText style={styles.date}>{data[0].meta.first_published_at}</CustomText>
            <CustomText style={styles.titleText}>{data[0].title}</CustomText>
          </View>
        )}
      </View>
    </BlogCard>
  ) : (
    <></>
  );
};

const styles = StyleSheet.create({
  BlogCardStyle: {
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 3,
  },
  cardImage: {
    width: '100%',
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

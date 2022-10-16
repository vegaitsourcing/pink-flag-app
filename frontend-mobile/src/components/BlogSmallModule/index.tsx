import React from 'react';
import { BlogSmallCard } from './utils/styles';
import { Image, View, StyleSheet, Platform } from 'react-native';
import { CustomText } from '../CustomText';
import { AppTheme } from '@pf/theme';

export interface BlogSmallModuleProps {
  date: string;
  title: string;
  image: string;
}

export const BlogSmallModule: React.FC<BlogSmallModuleProps> = ({ date, title, image }) => {
  console.log('Small: ' + image);
  return (
    <BlogSmallCard style={styles.BlogSmallCardStyle}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.cardImage}
          resizeMode="cover"
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          source={{ uri: image }}></Image>
      </View>
      <View style={styles.cardBody}>
        <View style={styles.titleTextContainer}>
          <CustomText style={styles.titleText}>{textOverflowHelper(title)}</CustomText>
        </View>
        <CustomText style={styles.date}>{new Date(date).toDateString()}</CustomText>
      </View>
    </BlogSmallCard>
  );
};

const textOverflowHelper = (text: string): string => {
  if (text.length >= 92) {
    return `${text.substring(0, 88)}...`;
  }
  return text;
};

const styles = StyleSheet.create({
  BlogSmallCardStyle:
    Platform.OS === 'ios'
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
  imageContainer: {
    flex: 1,
  },
  cardImage: {
    borderRadius: 20,
    width: '100%',
    height: '100%',
  },
  cardBody: {
    marginLeft: 20,
    flex: 2,
  },
  date: {
    fontSize: AppTheme.fontSize.$2Number,
    marginBottom: 10,
    color: AppTheme.colors.description,
  },
  titleTextContainer: {
    height: 65,
    overflow: 'hidden',
    marginBottom: 5,
  },
  titleText: {
    color: AppTheme.colors.black,
    fontSize: 15,
    marginBottom: 2,
    fontWeight: '500',
  },
});

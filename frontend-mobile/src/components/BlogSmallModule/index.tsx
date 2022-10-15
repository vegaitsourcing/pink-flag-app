import React from 'react';
import { BlogSmallCard } from './utils/styles';
import { Image, View, StyleSheet } from 'react-native';
import { StyledText } from '../CustomText/styles';
import { AppTheme } from '@pf/theme';
import { BlogModel } from '@pf/models';

export interface BlogSmallModuleProps {
  blogModel: BlogModel;
}

export const BlogSmallModule: React.FC<BlogSmallModuleProps> = (props: BlogSmallModuleProps) => {
  return (
    <BlogSmallCard style={styles.BlogSmallCardStyle}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.cardImage}
          resizeMode="cover"
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          source={require('../../assets/images/blog-card-example.png')}></Image>
      </View>
      <View style={styles.cardBody}>
        <View style={styles.titleTextContainer}>
          <StyledText style={styles.titleText}>{textOverflowHelper(props.blogModel.title)}</StyledText>
        </View>
        <StyledText style={styles.date}>{props.blogModel.date}</StyledText>
      </View>
    </BlogSmallCard>
  );
};

const textOverflowHelper = (text: string): string => {
  if (text.length >= 92) {
    return text.substring(0, 88) + '...';
  }
  return text;
};

const styles = StyleSheet.create({
  BlogSmallCardStyle: {
    backgroundColor: 'white',
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 3,
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

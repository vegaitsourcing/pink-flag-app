import React from 'react';
import { BlogCard } from './utils/styles';
import { Image, View, StyleSheet } from 'react-native';
import { StyledText } from '../CustomText/styles';
import { AppTheme } from '@pf/theme';
import { BlogModel } from '@pf/models';

export interface BlogModuleProps {
  blogModel: BlogModel;
}

export const BlogModule: React.FC<BlogModuleProps> = (props: BlogModuleProps) => {
  return (
    <BlogCard style={styles.BlogCardStyle}>
      <View style={styles.cardContainer}>
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
        <Image style={styles.cardImage} source={require('../../assets/images/blog-card-example.png')}></Image>
        <View style={styles.cardBody}>
          <StyledText style={styles.label}>{props.blogModel.type}</StyledText>
          <StyledText style={styles.date}>{props.blogModel.date}</StyledText>
          <StyledText style={styles.titleText}>{props.blogModel.title}</StyledText>
        </View>
      </View>
    </BlogCard>
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

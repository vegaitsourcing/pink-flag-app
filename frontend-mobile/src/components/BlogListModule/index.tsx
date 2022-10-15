import React, { useState, useEffect } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { AppTheme } from '@pf/theme';
import { BlogModel } from '@pf/models';
import { StyledText } from '../CustomText/styles';
import { FlatList } from 'react-native-gesture-handler';
import { BlogSmallModule } from '../BlogSmallModule';
import { Pagination } from '../Pagination';
import { SafeAreaView } from 'react-native-safe-area-context';

const mockedBlogModel: BlogModel = {
  title: 'Prva srednja škola koja je uvela besplatne higijenske uloške',
  date: 'April 22. 2022.',
  imageUrl: '../../assets/images/blog-card-example.png',
  type: 'vest',
};

export interface BlogListModel {
  blogModelList: BlogModel[];
  total: number;
}

export const BlogListModule: React.FC = () => {
  const [activeTag, setActiveTag] = useState('blog');
  const [activePage, setActivePage] = useState(1);
  const [contentList] = useState([mockedBlogModel, mockedBlogModel]);
  const total = 10;

  const nextPage = () => {
    if (activePage !== total) {
      setActivePage(activePage + 1);
      loadContent();
    }
  };

  const previousPage = () => {
    if (activePage !== 1) {
      setActivePage(activePage - 1);
      loadContent();
    }
  };

  useEffect(() => {
    loadContent();
  }, [activeTag]);

  const loadContent = (): void => {
    if (activeTag == 'blog') {
      console.log('fetch blogs');
    } else {
      console.log('fetch news');
    }
  };

  return (
    <>
      <View style={styles.blogListContainer}>
        <Pressable
          style={{ ...styles.pressable, borderColor: activeTag == 'blog' ? AppTheme.colors.primary : 'white' }}
          onPress={() => setActiveTag('blog')}>
          <StyledText style={{ ...styles.buttonText, fontWeight: activeTag == 'blog' ? 'bold' : 'normal' }}>
            Blog
          </StyledText>
        </Pressable>
        <Pressable
          style={{ ...styles.pressable, borderColor: activeTag == 'news' ? AppTheme.colors.primary : 'white' }}
          onPress={() => setActiveTag('news')}>
          <StyledText style={{ ...styles.buttonText, fontWeight: activeTag == 'news' ? 'bold' : 'normal' }}>
            Vesti
          </StyledText>
        </Pressable>
      </View>

      <FlatList
        data={contentList}
        renderItem={({ item }) => <BlogSmallModule blogModel={item}></BlogSmallModule>}></FlatList>

      <Pagination activePage={activePage} total={total} next={nextPage} previous={previousPage}></Pagination>
    </>
  );
};

const styles = StyleSheet.create({
  blogListContainer: {
    flexDirection: 'row',
    padding: 20,
    width: '100%',
  },
  pressable: {
    flex: 1,
    borderBottomWidth: 3,
  },
  buttonText: {
    width: '100%',
    textAlign: 'center',
    paddingBottom: 8,
  },
});

import React, { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { AppTheme } from '@pf/theme';
import { BlogModel } from '@pf/models';
import { BlogSmallModule, Pagination } from '@pf/components';
import { CustomText } from '../CustomText';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { BlogNavigatorParams } from '@pf/constants';
import { useGetAllBlogsQuery } from '@pf/services';

export interface BlogListModel {
  blogModelList: BlogModel[];
  total: number;
}

export const BlogListModule: React.FC = () => {
  const [activeTag, setActiveTag] = useState('blog');
  const [activePage, setActivePage] = useState(1);
  const { navigate } = useNavigation<StackNavigationProp<BlogNavigatorParams>>();
  const { data } = useGetAllBlogsQuery({ page: activePage, size: 5 });

  const nextPage = (): void => {
    if (data && activePage < data.totalElements / 5) {
      setActivePage(activePage + 1);
    }
  };

  const previousPage = (): void => {
    if (data && activePage > data.totalElements / 5) {
      setActivePage(activePage - 1);
    }
  };

  return (
    <>
      <View style={styles.blogListContainer}>
        <Pressable
          style={{ ...styles.pressable, borderColor: activeTag == 'blog' ? AppTheme.colors.primary : 'white' }}
          onPress={() => setActiveTag('blog')}>
          <CustomText style={{ ...styles.buttonText, fontWeight: activeTag == 'blog' ? 'bold' : 'normal' }}>
            Blog
          </CustomText>
        </Pressable>
        <Pressable
          style={{ ...styles.pressable, borderColor: activeTag == 'news' ? AppTheme.colors.primary : 'white' }}
          onPress={() => setActiveTag('news')}>
          <CustomText style={{ ...styles.buttonText, fontWeight: activeTag == 'news' ? 'bold' : 'normal' }}>
            Vesti
          </CustomText>
        </Pressable>
      </View>

      {data &&
        data.items.map((item, index) => (
          <Pressable key={index} onPress={() => navigate('blog_details', { id: item.id })}>
            <BlogSmallModule blogModel={item} />
          </Pressable>
        ))}

      {data && (
        <Pagination
          activePage={activePage}
          total={data?.totalElements / 5 ?? 0}
          next={nextPage}
          previous={previousPage}></Pagination>
      )}
      {data === undefined && (
        <CustomText style={{ textAlign: 'center', marginTop: 20, marginBottom: 20 }}>No data found.</CustomText>
      )}
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

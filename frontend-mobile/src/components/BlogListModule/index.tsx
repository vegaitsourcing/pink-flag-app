/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, View } from 'react-native';
import { BlogSmallModule, Pagination } from '@pf/components';
import { CustomText } from '../CustomText';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { BlogNavigatorParams } from '@pf/constants';
import { useGetAllBlogsQuery } from '@pf/services';
import { useTheme } from '@emotion/react';
import { BASE_URI } from '../../services/rootApi';

export const BlogListModule: React.FC = () => {
  const theme = useTheme();
  const [activeTag, setActiveTag] = useState('blog');
  const [activePage, setActivePage] = useState(0);
  const { navigate } = useNavigation<StackNavigationProp<BlogNavigatorParams>>();
  const { data, isLoading } = useGetAllBlogsQuery({ page: activePage, size: 5, category: activeTag.toUpperCase() });

  const nextPage = (): void => {
    if (data && activePage < data.meta.total_count / 5) {
      setActivePage(activePage + 1);
    }
  };

  const previousPage = (): void => {
    if (data && activePage > data.meta.total_count / 5) {
      setActivePage(activePage - 1);
    }
  };

  return (
    <>
      <View style={styles.blogListContainer}>
        <Pressable
          style={{ ...styles.pressable, borderColor: activeTag == 'blog' ? theme.colors.primary : 'white' }}
          onPress={() => setActiveTag('blog')}>
          <CustomText style={{ ...styles.buttonText, fontWeight: activeTag == 'blog' ? 'bold' : 'normal' }}>
            Blog
          </CustomText>
        </Pressable>
        <Pressable
          style={{ ...styles.pressable, borderColor: activeTag == 'vesti' ? theme.colors.primary : 'white' }}
          onPress={() => setActiveTag('vesti')}>
          <CustomText style={{ ...styles.buttonText, fontWeight: activeTag == 'vesti' ? 'bold' : 'normal' }}>
            Vesti
          </CustomText>
        </Pressable>
      </View>
      {isLoading ? (
        <View>
          <ActivityIndicator size="large" color={theme.colors.primary} />
        </View>
      ) : (
        <>
          {data &&
            data?.items.map((item, index) => (
              <Pressable key={index} onPress={() => navigate('blog_details', { id: item.id })}>
                <BlogSmallModule
                  date={item.meta.first_published_at}
                  title={item.title ?? ''}
                  image={BASE_URI + item.image.meta.download_url}
                />
              </Pressable>
            ))}

          {data && (
            <Pagination
              activePage={activePage}
              total={Math.ceil(data?.meta.total_count / 5) ?? 0}
              next={nextPage}
              previous={previousPage}></Pagination>
          )}
          {data === undefined && (
            <CustomText style={{ textAlign: 'center', marginTop: 20, marginBottom: 20 }}>Nema rezultata.</CustomText>
          )}
        </>
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

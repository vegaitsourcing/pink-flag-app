import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { BlogRoutes, BlogNavigatorParams } from '@pf/constants';
import { BlogDetailsScreen, BlogScreen } from '@pf/screens';
import { HeaderRight, HeaderTitle } from '@pf/components';
import { header } from './styles';

const Stack = createStackNavigator();
type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

const { BLOG, BLOG_DETAILS } = BlogRoutes;

export interface BlogScreenProps<Screen extends keyof BlogNavigatorParams> {
  navigation: StackNavigationProp<BlogNavigatorParams, Screen>;
  route: RouteProp<BlogNavigatorParams, Screen>;
}

const BlogNavigator: React.FC = (props: Partial<StackNavigatorProps>) => {
  return (
    <Stack.Navigator
      initialRouteName={BLOG}
      screenOptions={{ headerShown: true, headerTitleAlign: 'center' }}
      {...props}>
      <Stack.Screen
        name={BLOG}
        component={BlogScreen}
        options={{
          headerStyle: header.layout,
          headerTitle: () => <HeaderTitle></HeaderTitle>,
          headerRight: () => <HeaderRight></HeaderRight>,
        }}
      />
      <Stack.Screen
        name={BLOG_DETAILS}
        component={BlogDetailsScreen}
        options={{
          headerTitle: () => <HeaderTitle></HeaderTitle>,
          headerRight: () => <HeaderRight></HeaderRight>,
        }}
      />
    </Stack.Navigator>
  );
};

export default BlogNavigator;

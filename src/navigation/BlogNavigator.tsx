import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { BlogRoutes, BlogNavigatorParams } from '@pf/constants';
import { BlogScreen } from '@pf/screens';

const Stack = createStackNavigator();
type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

const { BLOG } = BlogRoutes;

export interface BlogScreenProps<Screen extends keyof BlogNavigatorParams> {
  navigation: StackNavigationProp<BlogNavigatorParams, Screen>;
  route: RouteProp<BlogNavigatorParams, Screen>;
}

const BlogNavigator: React.FC = (props: Partial<StackNavigatorProps>) => {
  return (
    <Stack.Navigator initialRouteName={BLOG} screenOptions={{ headerShown: false }} {...props}>
      <Stack.Screen name={BLOG} component={BlogScreen} />
    </Stack.Navigator>
  );
};

export default BlogNavigator;

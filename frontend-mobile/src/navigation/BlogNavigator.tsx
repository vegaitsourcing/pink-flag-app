import React, { useCallback } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { BlogRoutes, BlogNavigatorParams, RootRoutes } from '@pf/constants';
import { BlogDetailsScreen, BlogScreen, GeneralSettingsScreen } from '@pf/screens';
import { NavHeader } from '@pf/components';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

const { BLOG, BLOG_DETAILS } = BlogRoutes;
const { GENERAL_SETTINGS } = RootRoutes;

export interface BlogScreenProps<Screen extends keyof BlogNavigatorParams> {
  navigation: StackNavigationProp<BlogNavigatorParams, Screen>;
  route: RouteProp<BlogNavigatorParams, Screen>;
}

const BlogNavigator: React.FC = (props: Partial<StackNavigatorProps>) => {
  const { navigate } = useNavigation<NativeStackNavigationProp<BlogNavigatorParams>>();
  const handleOnSettingsPress = useCallback(() => navigate(GENERAL_SETTINGS), [navigate]);

  return (
    <Stack.Navigator initialRouteName={BLOG} screenOptions={{ headerShown: true }} {...props}>
      <Stack.Screen
        name={BLOG}
        component={BlogScreen}
        options={{
          header: props => <NavHeader onSettingsPress={handleOnSettingsPress} {...props} />,
        }}
      />
      <Stack.Screen
        name={BLOG_DETAILS}
        component={BlogDetailsScreen}
        options={{
          header: props => <NavHeader onSettingsPress={handleOnSettingsPress} {...props} />,
        }}
      />
      <Stack.Screen
        name={GENERAL_SETTINGS}
        component={GeneralSettingsScreen}
        options={{ presentation: 'fullScreenModal', headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default BlogNavigator;

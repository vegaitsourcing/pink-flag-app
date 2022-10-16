import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { BlogRoutes, HomeNavigatorParams, HomeRoutes } from '@pf/constants';
import { BlogDetailsScreen, HomeScreen } from '@pf/screens';
import { HeaderTitle, HeaderRight } from '@pf/components';
import { header } from './styles';

const Stack = createStackNavigator();
type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

const { HOME } = HomeRoutes;
const { BLOG_DETAILS } = BlogRoutes;

export interface HomeScreenProps<Screen extends keyof HomeNavigatorParams> {
  navigation: StackNavigationProp<HomeNavigatorParams, Screen>;
  route: RouteProp<HomeNavigatorParams, Screen>;
}

const HomeNavigator: React.FC = (props: Partial<StackNavigatorProps>) => {
  return (
    <Stack.Navigator
      initialRouteName={HOME}
      screenOptions={{ headerShown: true, headerTitleAlign: 'center' }}
      {...props}>
      <Stack.Screen
        name={HOME}
        component={HomeScreen}
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

export default HomeNavigator;

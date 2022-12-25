import React, { useCallback } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { BlogRoutes, HomeNavigatorParams, HomeRoutes, RootRoutes } from '@pf/constants';
import { BlogDetailsScreen, GeneralSettingsScreen, HomeScreen } from '@pf/screens';
import { NavHeader } from '@pf/components';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

const { HOME } = HomeRoutes;
const { BLOG_DETAILS } = BlogRoutes;
const { GENERAL_SETTINGS } = RootRoutes;

export interface HomeScreenProps<Screen extends keyof HomeNavigatorParams> {
  navigation: StackNavigationProp<HomeNavigatorParams, Screen>;
  route: RouteProp<HomeNavigatorParams, Screen>;
}

const HomeNavigator: React.FC = (props: Partial<StackNavigatorProps>) => {
  const { navigate } = useNavigation<NativeStackNavigationProp<HomeNavigatorParams>>();
  const handleOnSettingsPress = useCallback(() => navigate(GENERAL_SETTINGS), [navigate]);

  return (
    <Stack.Navigator initialRouteName={HOME} screenOptions={{ headerShown: true }} {...props}>
      <Stack.Screen
        name={HOME}
        component={HomeScreen}
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

export default HomeNavigator;

import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { DonationRoutes, BlogNavigatorParams } from '@pf/constants';
import { DonationScreen } from '@pf/screens';
import { HeaderRight, HeaderTitle } from '@pf/components';
import { header } from './styles';

const Stack = createStackNavigator();
type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

const { DONATIONS } = DonationRoutes;

export interface BlogScreenProps<Screen extends keyof BlogNavigatorParams> {
  navigation: StackNavigationProp<BlogNavigatorParams, Screen>;
  route: RouteProp<BlogNavigatorParams, Screen>;
}

const DonationNavigator: React.FC = (props: Partial<StackNavigatorProps>) => {
  return (
    <Stack.Navigator
      initialRouteName={DONATIONS}
      screenOptions={{ headerShown: true, headerTitleAlign: 'center' }}
      {...props}>
      <Stack.Screen
        name={DONATIONS}
        component={DonationScreen}
        options={{
          headerStyle: header.layout,
          headerTitle: () => <HeaderTitle></HeaderTitle>,
          headerRight: () => <HeaderRight></HeaderRight>,
        }}
      />
    </Stack.Navigator>
  );
};

export default DonationNavigator;

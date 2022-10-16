import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { CalendarRoutes, CalendarNavigatorParams } from '@pf/constants';
import { CalendarScreen } from '@pf/screens';
import { HeaderRight, HeaderTitle } from '@pf/components';
import { header } from './styles';

const Stack = createStackNavigator();
type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

const { CALENDAR } = CalendarRoutes;

export interface CalendarScreenProps<Screen extends keyof CalendarNavigatorParams> {
  navigation: StackNavigationProp<CalendarNavigatorParams, Screen>;
  route: RouteProp<CalendarNavigatorParams, Screen>;
}

const CalendarNavigator: React.FC = (props: Partial<StackNavigatorProps>) => {
  return (
    <Stack.Navigator
      initialRouteName={CALENDAR}
      screenOptions={{ headerShown: true, headerTitleAlign: 'center' }}
      {...props}>
      <Stack.Screen
        name={CALENDAR}
        component={CalendarScreen}
        options={{
          headerStyle: header.layout,
          headerTitle: () => <HeaderTitle></HeaderTitle>,
          headerRight: () => <HeaderRight></HeaderRight>,
        }}
      />
    </Stack.Navigator>
  );
};

export default CalendarNavigator;

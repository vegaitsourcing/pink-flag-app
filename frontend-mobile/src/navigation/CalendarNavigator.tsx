import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { CalendarRoutes, CalendarNavigatorParams } from '@pf/constants';
import { CalendarScreen } from '@pf/screens';

const Stack = createStackNavigator();
type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

const { CALENDAR } = CalendarRoutes;

export interface CalendarScreenProps<Screen extends keyof CalendarNavigatorParams> {
  navigation: StackNavigationProp<CalendarNavigatorParams, Screen>;
  route: RouteProp<CalendarNavigatorParams, Screen>;
}

const CalendarNavigator: React.FC = (props: Partial<StackNavigatorProps>) => {
  return (
    <Stack.Navigator initialRouteName={CALENDAR} screenOptions={{ headerShown: false }} {...props}>
      <Stack.Screen name={CALENDAR} component={CalendarScreen} />
    </Stack.Navigator>
  );
};

export default CalendarNavigator;

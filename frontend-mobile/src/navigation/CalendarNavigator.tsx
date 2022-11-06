import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { CalendarRoutes, CalendarNavigatorParams } from '@pf/constants';
import { CalendarOnboardingScreen, CalendarScreen } from '@pf/screens';
import { HeaderRight, HeaderTitle } from '@pf/components';
// import { header } from './styles';

const Stack = createNativeStackNavigator();
type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

const { CALENDAR, CALENDAR_ONBOARDING } = CalendarRoutes;

export interface CalendarScreenProps<Screen extends keyof CalendarNavigatorParams> {
  navigation: NativeStackNavigationProp<CalendarNavigatorParams, Screen>;
  route: RouteProp<CalendarNavigatorParams, Screen>;
}

const CalendarNavigator: React.FC = (props: Partial<StackNavigatorProps>) => {
  return (
    <Stack.Navigator
      initialRouteName={CALENDAR_ONBOARDING}
      screenOptions={{ headerShown: true, headerTitleAlign: 'center' }}
      {...props}>
      <Stack.Screen
        name={CALENDAR}
        component={CalendarScreen}
        options={{
          // headerStyle: header.layout,
          headerTitle: () => <HeaderTitle></HeaderTitle>,
          headerRight: () => <HeaderRight></HeaderRight>,
        }}
      />
      <Stack.Screen
        name={CALENDAR_ONBOARDING}
        component={CalendarOnboardingScreen}
        options={{ presentation: 'fullScreenModal', headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default CalendarNavigator;

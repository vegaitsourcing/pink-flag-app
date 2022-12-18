import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CalendarNavigatorParams, CalendarRoutes } from '@pf/constants';
import { CalendarOnboardingScreen, CalendarScreen } from '@pf/screens';
import { HeaderRight, HeaderTitle } from '@pf/components';
// import { header } from './styles';

const Stack = createNativeStackNavigator<CalendarNavigatorParams>();
type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

const { CALENDAR, CALENDAR_ONBOARDING } = CalendarRoutes;

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

import React, { useCallback } from 'react';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CalendarNavigatorParams, CalendarRoutes } from '@pf/constants';
import { CalendarOnboardingScreen, CalendarScreen, CalendarSettingsScreen } from '@pf/screens';
import { NavHeader } from '@pf/components';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator<CalendarNavigatorParams>();
type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

const { CALENDAR, CALENDAR_ONBOARDING, CALENDAR_SETTINGS } = CalendarRoutes;

const CalendarNavigator: React.FC = (props: Partial<StackNavigatorProps>) => {
  const { navigate } = useNavigation<NativeStackNavigationProp<CalendarNavigatorParams>>();
  const handleOnSettingsPress = useCallback(() => navigate(CALENDAR_SETTINGS), [navigate]);

  return (
    <Stack.Navigator initialRouteName={CALENDAR} screenOptions={{ headerShown: true }} {...props}>
      <Stack.Screen
        name={CALENDAR}
        component={CalendarScreen}
        options={{
          header: props => <NavHeader onSettingsPress={handleOnSettingsPress} {...props} />,
        }}
      />
      <Stack.Screen
        name={CALENDAR_ONBOARDING}
        component={CalendarOnboardingScreen}
        options={{ presentation: 'fullScreenModal', headerShown: false }}
      />
      <Stack.Screen
        name={CALENDAR_SETTINGS}
        component={CalendarSettingsScreen}
        options={{ presentation: 'fullScreenModal', headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default CalendarNavigator;

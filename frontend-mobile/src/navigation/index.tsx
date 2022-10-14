import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootNavigatorParams, RootRoutes } from '@pf/constants';
import HomeNavigator from './HomeNavigator';
import BlogNavigator from './BlogNavigator';
import CalendarNavigator from './CalendarNavigator';
import { DonationScreen } from '@pf/screens';

const { HOME_STACK, BLOG_STACK, CALENDAR_STACK, DONATION } = RootRoutes;
const Tab = createBottomTabNavigator<RootNavigatorParams>();

export const RootNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={HOME_STACK} component={HomeNavigator} />
      <Tab.Screen name={BLOG_STACK} component={BlogNavigator} />
      <Tab.Screen name={CALENDAR_STACK} component={CalendarNavigator} />
      <Tab.Screen name={DONATION} component={DonationScreen} />
    </Tab.Navigator>
  );
};

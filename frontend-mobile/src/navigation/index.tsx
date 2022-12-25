import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootNavigatorParams, RootRoutes } from '@pf/constants';
import HomeNavigator from './HomeNavigator';
import BlogNavigator from './BlogNavigator';
import CalendarNavigator from './CalendarNavigator';
import { BottomTabBar } from '@pf/components';
import DonationNavigator from './DonationNavigator';

const { HOME_STACK, BLOG_STACK, CALENDAR_STACK, DONATION_STACK } = RootRoutes;
const Tab = createBottomTabNavigator<RootNavigatorParams>();

export const RootNavigator: React.FC = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomTabBar {...props} />} screenOptions={{ headerShown: false }}>
      <Tab.Screen name={HOME_STACK} component={HomeNavigator} />
      <Tab.Screen name={BLOG_STACK} component={BlogNavigator} />
      <Tab.Screen name={CALENDAR_STACK} component={CalendarNavigator} />
      <Tab.Screen name={DONATION_STACK} component={DonationNavigator} />
    </Tab.Navigator>
  );
};

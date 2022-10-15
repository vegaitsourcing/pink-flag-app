import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootNavigatorParams, RootRoutes } from '@pf/constants';
import HomeNavigator from './HomeNavigator';
import BlogNavigator from './BlogNavigator';
import CalendarNavigator from './CalendarNavigator';
import { DonationScreen } from '@pf/screens';
import { BottomTabBar } from '@pf/components';

const { HOME_STACK, BLOG_STACK, CALENDAR_STACK, DONATION } = RootRoutes;
const Tab = createBottomTabNavigator<RootNavigatorParams>();

// const blog_icon = '../assets/icons/blog.png';
// const blog_icon_active = '../assets/icons/blog_active.png';
// const calendar_icon = '../assets/icons/calendar.png';
// const calendar_icon_active = '../assets/icons/calendar_active.png';
// const donate_icon = '../assets/icons/donate.png';
// const donate_icon_active = '../assets/icons/donate_active.png';
// import { HomeSvg, HomeFilledSvg } from '@pf/assets';
// import { iconStyle } from './styles';

export const RootNavigator: React.FC = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomTabBar {...props} />} screenOptions={{ headerShown: false }}>
      <Tab.Screen name={HOME_STACK} component={HomeNavigator} />
      <Tab.Screen name={BLOG_STACK} component={BlogNavigator} />
      <Tab.Screen name={CALENDAR_STACK} component={CalendarNavigator} />
      <Tab.Screen name={DONATION} component={DonationScreen} />
    </Tab.Navigator>
  );
};

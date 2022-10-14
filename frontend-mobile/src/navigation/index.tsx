import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootNavigatorParams, RootRoutes } from '@pf/constants';
import HomeNavigator from './HomeNavigator';
import BlogNavigator from './BlogNavigator';
import CalendarNavigator from './CalendarNavigator';
import { DonationScreen } from '@pf/screens';
import { HeaderRight, HeaderTitle } from '@pf/components';
import { Image } from 'react-native';

const { HOME_STACK, BLOG_STACK, CALENDAR_STACK, DONATION } = RootRoutes;
const Tab = createBottomTabNavigator<RootNavigatorParams>();

const home_icon = '../assets/icons/home.png';
const home_icon_active = '../assets/icons/home_active.png';
const blog_icon = '../assets/icons/blog.png';
const blog_icon_active = '../assets/icons/blog_active.png';
const calendar_icon = '../assets/icons/calendar.png';
const calendar_icon_active = '../assets/icons/calendar_active.png';
const donate_icon = '../assets/icons/donate.png';
const donate_icon_active = '../assets/icons/donate_active.png';

export const RootNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={HOME_STACK}
        component={HomeNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require(home_icon_active) : require(home_icon)}
              style={{ width: 20, height: 20 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={BLOG_STACK}
        component={BlogNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require(blog_icon_active) : require(blog_icon)}
              style={{ width: 20, height: 20 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={CALENDAR_STACK}
        component={CalendarNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require(calendar_icon_active) : require(calendar_icon)}
              style={{ width: 20, height: 20 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={DONATION}
        component={DonationScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require(donate_icon_active) : require(donate_icon)}
              style={{ width: 20, height: 20 }}
            />
          ),
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: () => <HeaderTitle />,
          headerRight: () => <HeaderRight />,
        }}
      />
    </Tab.Navigator>
  );
};

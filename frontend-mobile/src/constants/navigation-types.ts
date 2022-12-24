import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BlogRoutes, CalendarRoutes, HomeRoutes, RootRoutes } from './routes';

const { WELCOME_SCREEN_ENTER_LINK, HOME_STACK, BLOG_STACK, CALENDAR_STACK, DONATION } = RootRoutes;
const { HOME } = HomeRoutes;
const { BLOG, BLOG_DETAILS } = BlogRoutes;
const { CALENDAR, CALENDAR_ONBOARDING, CALENDAR_SETTINGS } = CalendarRoutes;

export type RootNavigatorParams = {
  [WELCOME_SCREEN_ENTER_LINK]: undefined;
  [HOME_STACK]: undefined;
  [BLOG_STACK]: undefined;
  [CALENDAR_STACK]: undefined;
  [DONATION]: undefined;
};

export type HomeNavigatorParams = {
  [HOME]: undefined;
  [BLOG_DETAILS]: { id: number };
};

export type BlogNavigatorParams = {
  [BLOG]: undefined;
  [BLOG_DETAILS]: { id: number };
};

export type CalendarNavigatorParams = {
  [CALENDAR]: undefined;
  [CALENDAR_ONBOARDING]: undefined;
  [CALENDAR_SETTINGS]: undefined;
};
export type CalendarNavigatorScreenProps<Screen extends keyof CalendarNavigatorParams> = NativeStackScreenProps<
  CalendarNavigatorParams,
  Screen
>;

export const RootRoutes = {
  WELCOME_SCREEN_ENTER_LINK: 'welcome-screen-enter-link',
  HOME_STACK: 'home_stack',
  BLOG_STACK: 'blog_stack',
  CALENDAR_STACK: 'calendar_stack',
  DONATION_STACK: 'donation_stack',
  GENERAL_SETTINGS: 'general_settings',
} as const;

export const HomeRoutes = {
  HOME: 'home',
} as const;

export const BlogRoutes = {
  BLOG: 'blog',
  BLOG_DETAILS: 'blog_details',
} as const;

export const CalendarRoutes = {
  CALENDAR: 'calendar',
  CALENDAR_ONBOARDING: 'calendar_onboarding',
  CALENDAR_SETTINGS: 'calendar_settings',
} as const;

export const DonationRoutes = {
  DONATIONS: 'donations',
} as const;

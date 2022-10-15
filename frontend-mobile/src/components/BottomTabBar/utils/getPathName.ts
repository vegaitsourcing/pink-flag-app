import { RootRoutes } from '@pf/constants';

const { HOME_STACK, BLOG_STACK, CALENDAR_STACK, DONATION } = RootRoutes;

const PathNames = {
  [HOME_STACK]: 'Početna',
  [BLOG_STACK]: 'Blog',
  [CALENDAR_STACK]: 'Moj Kalendar',
  [DONATION]: 'Doniraj',
};
export type PathName = keyof typeof PathNames;

export const getPathName = (path: PathName): string => {
  return PathNames[path];
};

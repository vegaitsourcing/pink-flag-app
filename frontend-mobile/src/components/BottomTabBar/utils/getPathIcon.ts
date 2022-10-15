import { HomeSvg, HomeFilledSvg } from '@pf/assets';
import { RootRoutes } from '@pf/constants';
import { SvgProps } from 'react-native-svg';

const { HOME_STACK, BLOG_STACK, CALENDAR_STACK, DONATION } = RootRoutes;

const ICONS = {
  [HOME_STACK]: HomeSvg,
  [HOME_STACK + '_active']: HomeFilledSvg,
  [BLOG_STACK]: HomeSvg,
  [BLOG_STACK + '_active']: HomeFilledSvg,
  [CALENDAR_STACK]: HomeSvg,
  [CALENDAR_STACK + '_active']: HomeFilledSvg,
  [DONATION]: HomeSvg,
  [DONATION + '_active']: HomeFilledSvg,
};

export const getPathIcon = (path: string, isFocused: boolean): React.FC<SvgProps> => {
  const key = path + (isFocused ? `_active` : '');

  return ICONS[key];
};

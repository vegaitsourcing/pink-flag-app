import styled from '@emotion/native';
import { CustomText, PrimaryButton } from '@pf/components';
import { unit } from '@pf/utils';
import PagerView from 'react-native-pager-view';

const CONTAINER_BOTTOM = 29;
const TITLE_BOTTOM = 48;
const TEXT_TOP = 16;
const INDICATOR_CONTAINER_WIDTH = 56;
const INDICATOR_CONTAINER_HEIGHT = 8;
const INDICATOR_CONTAINER_TOP = 10;
const BUTTON_BOTTOM = 54;

export const Container = styled.View`
  flex: 1;
  padding-top: ${unit(CONTAINER_BOTTOM)};
  padding-horizontal: ${({ theme }) => theme.spacing.$1};
`;

export const StyledTitle = styled(CustomText)`
  text-align: center;
  margin-bottom: ${unit(TITLE_BOTTOM)};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.$8};
  line-height: ${({ theme }) => theme.lineHeight.$6};
  font-weight: ${({ theme }) => theme.fontWeight.$800};
`;

export const SectionTitle = styled(CustomText)`
  margin-top: ${unit(TEXT_TOP)};
  font-size: ${({ theme }) => theme.fontSize.$5};
  line-height: ${({ theme }) => theme.lineHeight.$4};
  font-weight: ${({ theme }) => theme.fontWeight.$700};
`;

export const BulletText = styled(CustomText)`
  margin-top: ${({ theme }) => theme.spacing.$1};
  font-size: ${({ theme }) => theme.fontSize.$5};
  line-height: ${({ theme }) => theme.lineHeight.$6};
  font-weight: ${({ theme }) => theme.fontWeight.$400};
`;

export const StyledPagerView = styled(PagerView)`
  flex: 1;
`;

export const IndicatorContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: ${unit(INDICATOR_CONTAINER_WIDTH)};
  height: ${unit(INDICATOR_CONTAINER_HEIGHT)};
  margin-top: ${unit(INDICATOR_CONTAINER_TOP)};
`;

export const StyledPrimaryButton = styled(PrimaryButton)`
  margin-top: ${({ theme }) => theme.spacing.$1};
`;

export const Footer = styled.View`
  align-items: center;
  margin-bottom: ${unit(BUTTON_BOTTOM)};
`;

import styled from '@emotion/native';
import { CustomText } from '@pf/components';
import { unit } from '@pf/utils';
import { Button } from '../../components';
import PagerView from 'react-native-pager-view';

const CONTAINER_BOTTOM = 37;
const ICON_BOTTOM = 40;
const TITLE_BOTTOM = 48;
const BUTTON_BOTTOM = 54;
const TEXT_TOP = 16;

export const Container = styled.View`
  flex: 1;
  padding-top: ${unit(CONTAINER_BOTTOM)};
  padding-horizontal: ${({ theme }) => theme.spacing.$1};
`;

export const IconWrapper = styled.View`
  align-items: center;
  margin-bottom: ${unit(ICON_BOTTOM)};
`;

export const StyledButton = styled(Button)`
  position: absolute;
  bottom: ${unit(BUTTON_BOTTOM)};
  left: ${({ theme }) => theme.spacing.$1};
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

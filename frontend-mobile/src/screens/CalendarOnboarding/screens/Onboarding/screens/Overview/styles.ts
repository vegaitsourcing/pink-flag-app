import styled from '@emotion/native';
import { CustomText } from '@pf/components';
import { unit } from '@pf/utils';

const TITLE_BOTTOM = 48;

export const Container = styled.ScrollView`
  flex: 1;
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

import { CustomText } from '@pf/components';
import styled from '@emotion/native';
import { unit } from '@pf/utils';

const TITLE_BOTTOM = 6;
const SUBTITLE_BOTTOM = 9;

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled(CustomText)`
  align-self: center;
  margin-bottom: ${unit(TITLE_BOTTOM)};
  font-size: ${({ theme }) => theme.fontSize.$7};
  line-height: ${({ theme }) => theme.lineHeight.$6};
  font-weight: ${({ theme }) => theme.fontWeight.$700};
`;

export const Subtitle = styled(CustomText)`
  margin-bottom: ${unit(SUBTITLE_BOTTOM)};
  font-size: ${({ theme }) => theme.fontSize.$5};
  margin-left: ${({ theme }) => theme.spacing.$1};
  line-height: ${({ theme }) => theme.lineHeight.$4};
  font-weight: ${({ theme }) => theme.fontWeight.$700};
`;

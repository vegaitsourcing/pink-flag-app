import styled from '@emotion/native';
import { CustomText } from '@pf/components';
import { unit } from '@pf/utils';

const TITLE_BOTTOM = 36;

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const StyledTitle = styled(CustomText)`
  text-align: center;
  margin-bottom: ${unit(TITLE_BOTTOM)};
  font-size: ${({ theme }) => theme.fontSize.$7};
  line-height: ${({ theme }) => theme.lineHeight.$6};
  font-weight: ${({ theme }) => theme.fontWeight.$700};
`;

export const Wrapper = styled.View`
  align-self: stretch;
`;

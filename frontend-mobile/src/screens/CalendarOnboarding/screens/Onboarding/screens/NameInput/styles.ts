import styled from '@emotion/native';
import { CustomText } from '@pf/components';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const StyledTitle = styled(CustomText)`
  font-size: ${({ theme }) => theme.fontSize.$7};
  margin-bottom: ${({ theme }) => theme.spacing.$1};
  line-height: ${({ theme }) => theme.lineHeight.$6};
  font-weight: ${({ theme }) => theme.fontWeight.$700};
`;

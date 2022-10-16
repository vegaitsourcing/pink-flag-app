import styled from '@emotion/native';
import { unit } from '@pf/utils';
import { CustomText } from '../../../CustomText';

const HEIGHT = 33;

export const Container = styled.View`
  height: ${unit(HEIGHT)};
  flex-direction: row;
`;

export const StyledCustomText = styled(CustomText)`
  font-size: ${({ theme }) => theme.fontSize.$8};
  line-height: ${({ theme }) => theme.lineHeight.$7};
  font-weight: ${({ theme }) => theme.fontWeight.$700};
`;

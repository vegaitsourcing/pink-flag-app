import { unit } from '@pf/utils';
import styled from '@emotion/native';
import { CustomText } from '../../CustomText';

const HEIGHT = 56;

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  min-height: ${unit(HEIGHT)};
  justify-content: center;
`;

export const Title = styled(CustomText)`
  margin-top: ${({ theme }) => theme.spacing.$2};
  font-size: ${({ theme }) => theme.lineHeight.$5};
  line-height: ${({ theme }) => theme.lineHeight.$6};
  font-weight: ${({ theme }) => theme.fontWeight.$700};
  text-align: center;
`;

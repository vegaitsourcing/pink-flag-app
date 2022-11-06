import styled from '@emotion/native';
import { CustomText } from '@pf/components';
import { unit } from '@pf/utils';

const HEIGHT = 42;

export const Container = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  justify-content: center;
  height: ${unit(HEIGHT)};
  border-radius: ${({ theme }) => theme.borderRadius.$2};
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const StyledCustomText = styled(CustomText)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.$5};
  line-height: ${({ theme }) => theme.lineHeight.$4};
  font-weight: ${({ theme }) => theme.fontWeight.$700};
`;

import styled from '@emotion/native';
import { unit } from '@pf/utils';

const HEIGHT = 44;

export const Container = styled.View`
  align-items: flex-end;
  height: ${unit(HEIGHT)};
`;

export const CloseButton = styled.TouchableOpacity`
  align-items: center;
  width: ${unit(HEIGHT)};
  height: ${unit(HEIGHT)};
  justify-content: center;
  margin-right: ${({ theme }) => theme.spacing.$2};
`;

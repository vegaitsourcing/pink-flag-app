import { unit } from '@pf/utils';
import styled from '@emotion/native';
import Animated from 'react-native-reanimated';

const SIZE = 8;
const BACKGROUND = '#EDEDED';

export const Container = styled.View`
  width: ${unit(SIZE)};
  height: ${unit(SIZE)};
  border-radius: ${unit(SIZE / 2)};
  background-color: ${BACKGROUND};
`;

export const FilledCenter = styled(Animated.View)`
  flex: 1;
  border-radius: ${unit(SIZE / 2)};
  background-color: ${({ theme }) => theme.colors.primary};
`;

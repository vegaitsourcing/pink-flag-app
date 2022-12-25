import { unit } from '@pf/utils';
import styled from '@emotion/native';
import { Animated } from 'react-native';

const RADIUS = 100;
const CONTAINER_HEIGHT = 24;
export const CONTAINER_WIDTH = 40;
export const SWITCH_SIZE = 18;
export const SWITCH_PADDING = 3;

export const Container = styled.Pressable``;

export const Base = styled(Animated.View)`
  justify-content: center;
  border-radius: ${unit(RADIUS)};
  width: ${unit(CONTAINER_WIDTH)};
  height: ${unit(CONTAINER_HEIGHT)};
  padding-horizontal: ${unit(SWITCH_PADDING)};
`;

export const Switch = styled(Animated.View)`
  width: ${unit(SWITCH_SIZE)};
  height: ${unit(SWITCH_SIZE)};
  border-radius: ${unit(SWITCH_SIZE / 2)};
  background-color: ${({ theme }) => theme.colors.white};
`;

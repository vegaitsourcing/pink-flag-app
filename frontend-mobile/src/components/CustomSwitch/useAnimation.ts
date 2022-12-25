/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Theme } from '@emotion/react';
import { useCallback, useRef } from 'react';
import { Animated } from 'react-native';
import { CONTAINER_WIDTH, SWITCH_PADDING, SWITCH_SIZE } from './styles';

const TURNED_OFF = 0;
const ANIMATION_DURATION = 200;
const COLOR_ANIMATION_DURATION = 400;
const TURNED_ON = CONTAINER_WIDTH - SWITCH_SIZE - SWITCH_PADDING * 2;
const BACKGROUND = '#B0BEC5';

export const useAnimation = (initialValue: boolean, theme: Theme) => {
  const animatedX = useRef(new Animated.Value(initialValue ? TURNED_ON : TURNED_OFF)).current;
  const animatedColor = useRef(new Animated.Value(initialValue ? 1 : 0)).current;
  const interpolatedColor = useRef(
    animatedColor.interpolate({
      inputRange: [0, 1],
      outputRange: [BACKGROUND, theme.colors.success],
    }),
  ).current;

  const handleTurnOn = useCallback(() => {
    Animated.parallel([
      Animated.timing(animatedX, {
        toValue: TURNED_ON,
        duration: ANIMATION_DURATION,
        useNativeDriver: true,
      }),
      Animated.timing(animatedColor, {
        toValue: 1,
        duration: COLOR_ANIMATION_DURATION,
        useNativeDriver: false,
      }),
    ]).start();
  }, [animatedColor, animatedX]);

  const handleTurnOff = useCallback(() => {
    Animated.parallel([
      Animated.timing(animatedX, {
        toValue: TURNED_OFF,
        duration: ANIMATION_DURATION,
        useNativeDriver: true,
      }),
      Animated.timing(animatedColor, {
        toValue: 0,
        duration: COLOR_ANIMATION_DURATION,
        useNativeDriver: false,
      }),
    ]).start();
  }, [animatedColor, animatedX]);

  return {
    animatedX,
    handleTurnOn,
    handleTurnOff,
    interpolatedColor,
  };
};

import React from 'react';
import { Container, FilledCenter } from './styles';
import { useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';

const FILLED = 1;
const TRANSPARENT = 0;
const ANIMATION_DURATION = 300;

interface Props {
  isFilled?: boolean;
}

export const ScrollIndicator: React.FC<Props> = ({ isFilled = false }) => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(isFilled ? FILLED : TRANSPARENT, {
        duration: ANIMATION_DURATION,
        easing: Easing.linear,
      }),
    };
  });

  return (
    <Container>
      <FilledCenter style={animatedStyle} />
    </Container>
  );
};

import React from 'react';
import { Container, FilledCenter } from './styles';
import { useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';

interface Props {
  isFilled?: boolean;
}

export const ScrollIndicator: React.FC<Props> = ({ isFilled = false }) => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(isFilled ? 1 : 0, {
        duration: 300,
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

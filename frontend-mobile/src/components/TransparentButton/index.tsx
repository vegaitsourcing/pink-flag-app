import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, DisabledOverlay, StyledCustomText } from './styles';

interface Props extends TouchableOpacityProps {
  content?: string;
}

export const TransparentButton: React.FC<Props> = ({ content, disabled, ...props }) => {
  return (
    <Container disabled={disabled} {...props}>
      <StyledCustomText content={content} />
      {disabled && <DisabledOverlay />}
    </Container>
  );
};

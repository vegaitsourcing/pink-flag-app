import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, StyledCustomText } from './styles';

interface Props extends TouchableOpacityProps {
  content?: string;
}

export const Button: React.FC<Props> = ({ content, ...props }) => {
  return (
    <Container {...props}>
      <StyledCustomText content={content} />
    </Container>
  );
};

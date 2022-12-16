import { GoogleSvg } from '@pf/assets';
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, StyledCustomText } from './styles';

export const GoogleLoginButton: React.FC<TouchableOpacityProps> = ({ ...props }) => {
  return (
    <Container {...props}>
      <GoogleSvg />
      <StyledCustomText content="Prijavi se pomoću Google-a" />
    </Container>
  );
};

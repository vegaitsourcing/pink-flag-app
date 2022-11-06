import { GoogleSvg } from '@pf/assets';
import React from 'react';
import { Container, StyledCustomText } from './styles';

export const GoogleLoginButton: React.FC = () => {
  return (
    <Container>
      <GoogleSvg />
      <StyledCustomText content="Prijavi se pomoću Google-a" />
    </Container>
  );
};

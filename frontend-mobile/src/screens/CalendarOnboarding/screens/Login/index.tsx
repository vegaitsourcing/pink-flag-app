import { Line } from '@pf/components';
import React from 'react';
import { GoogleLoginButton } from '../../components';
import { Container, StyledDescription, StyledTitle, StyledButton } from './styles';

export const LoginScreen: React.FC = () => {
  return (
    <Container>
      <StyledTitle content="Prijavi se" />
      <GoogleLoginButton />
      <StyledButton content="Započni kalendar bez prijave" />
      <Line />
      <StyledDescription content="Prijavljivanjem pomoću Google-a ti omogućava da sve svoje podatke vezane za kalendar čuvaš na svom Google nalogu." />
    </Container>
  );
};

import { Line } from '@pf/components';
import React from 'react';
import { GoogleLoginButton } from '../../components';
import { Container, StyledDescription, StyledTitle, StyledButton } from './styles';

interface Props {
  onLogin: () => void;
}

export const LoginScreen: React.FC<Props> = ({ onLogin }) => {
  return (
    <Container>
      <StyledTitle content="Prijavi se" />
      <GoogleLoginButton onPress={onLogin} />
      <StyledButton content="Započni kalendar bez prijave" onPress={onLogin} />
      <Line />
      <StyledDescription content="Prijavljivanjem pomoću Google-a ti omogućava da sve svoje podatke vezane za kalendar čuvaš na svom Google nalogu." />
    </Container>
  );
};

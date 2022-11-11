import React from 'react';
import { ModalHeader as Header } from '@pf/components';
import { Container, StyledPagerView } from './styles';
import { LoginScreen, OnboardingScreen } from './screens';

export const CalendarOnboardingScreen: React.FC = () => {
  return (
    <Container>
      <Header />
      <StyledPagerView>
        <LoginScreen />
        <OnboardingScreen />
      </StyledPagerView>
    </Container>
  );
};

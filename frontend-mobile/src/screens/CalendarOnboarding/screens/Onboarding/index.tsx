import { CalendarOnboardingSvg } from '@pf/assets';
import React from 'react';
import { NameInputScreen, OverviewScreen } from './screens';
import { Container, StyledButton, IconWrapper, StyledPagerView } from './styles';

export const OnboardingScreen: React.FC = () => {
  return (
    <Container>
      <IconWrapper>
        <CalendarOnboardingSvg />
      </IconWrapper>
      <StyledPagerView>
        <OverviewScreen />
        <NameInputScreen />
      </StyledPagerView>
      <StyledButton content="Sledeće" />
    </Container>
  );
};

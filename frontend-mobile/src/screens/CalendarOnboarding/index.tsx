import React, { useCallback, useRef } from 'react';
import { ModalHeader as Header } from '@pf/components';
import { Container, StyledPagerView } from './styles';
import { LoginScreen, OnboardingScreen } from './screens';
import PagerView from 'react-native-pager-view';
import { useHideBottomTabs } from '@pf/hooks';
import { CalendarNavigatorScreenProps, CalendarRoutes } from '@pf/constants';

const START_FROM_SECOND_SCREEN = 1;
const { CALENDAR_ONBOARDING } = CalendarRoutes;
type Props = CalendarNavigatorScreenProps<typeof CALENDAR_ONBOARDING>;

export const CalendarOnboardingScreen: React.FC<Props> = () => {
  const pagerViewRef = useRef<PagerView>(null);
  const nextScreen = useRef(START_FROM_SECOND_SCREEN);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _ = useHideBottomTabs();

  const scrollToNext = useCallback((): void => {
    pagerViewRef.current?.setPage(nextScreen.current);
    nextScreen.current += 1;
  }, []);

  return (
    <Container>
      <Header />
      <StyledPagerView scrollEnabled={false} ref={pagerViewRef}>
        <LoginScreen onLogin={scrollToNext} />
        <OnboardingScreen />
      </StyledPagerView>
    </Container>
  );
};

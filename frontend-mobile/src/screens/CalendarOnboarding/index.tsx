import React, { useCallback, useEffect, useRef } from 'react';
import { ModalHeader as Header } from '@pf/components';
import { Container, StyledPagerView } from './styles';
import { LoginScreen, OnboardingScreen } from './screens';
import PagerView from 'react-native-pager-view';
import { useAppDispatch } from '@pf/hooks';
import { toggleCalendarOnboardingStatus } from '@pf/reducers/settingsReducer';
import { CalendarNavigatorScreenProps, CalendarRoutes } from '@pf/constants';

const { CALENDAR_ONBOARDING } = CalendarRoutes;
type Props = CalendarNavigatorScreenProps<typeof CALENDAR_ONBOARDING>;

export const CalendarOnboardingScreen: React.FC<Props> = ({ navigation }) => {
  const pagerViewRef = useRef<PagerView>(null);
  const nextScreen = useRef(1);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(toggleCalendarOnboardingStatus());
  }, [dispatch]);

  useEffect(() => {
    navigation.addListener('beforeRemove', () => {
      dispatch(toggleCalendarOnboardingStatus());
    });
  }, [dispatch, navigation]);

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

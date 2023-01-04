/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect, useMemo } from 'react';
import { CalendarExplanation, Footer, PinkFlagCalendar, Reminders, UserGreeting } from '@pf/components';
import { Container, Content, ExplanationWrapper, getStyles } from './styles';
import GreetingData from '../../assets/data/greeting.json';
import { useTheme } from '@emotion/react';
import { CalendarNavigatorScreenProps, CalendarRoutes, RootRoutes } from '@pf/constants';
import { useAppSelector } from '@pf/hooks';
import { selectUserName } from '@pf/reducers/userReducer';
import { selectIsCalendarActivated } from '@pf/reducers/settingsReducer';

const NAVIGATION_DELAY = 500;
const { CALENDAR } = CalendarRoutes;
const { CALENDAR_ONBOARDING } = RootRoutes;
type Props = CalendarNavigatorScreenProps<typeof CALENDAR>;

export const CalendarScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  const theme = useTheme();
  const inlineStyles = useMemo(() => getStyles(theme), [theme]);
  const isCalendarActivated = useAppSelector(selectIsCalendarActivated);
  const userName = useAppSelector(selectUserName) || '';

  useEffect(() => {
    if (!isCalendarActivated) {
      setTimeout(() => navigate(CALENDAR_ONBOARDING), NAVIGATION_DELAY);
    }
  }, [isCalendarActivated, navigate]);

  return (
    <Container
      style={inlineStyles.container}
      contentContainerStyle={inlineStyles.content}
      showsVerticalScrollIndicator={false}>
      <Content>
        <UserGreeting name={userName} description={GreetingData.description} />
        <Reminders />
        <PinkFlagCalendar />
        <ExplanationWrapper>
          <CalendarExplanation />
        </ExplanationWrapper>
      </Content>
      <Footer />
    </Container>
  );
};

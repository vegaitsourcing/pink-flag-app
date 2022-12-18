/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect, useMemo } from 'react';
import { CalendarExplanation, Footer, PinkFlagCalendar, Reminders, UserGreeting } from '@pf/components';
import { Container, Content, ExplanationWrapper, getStyles } from './styles';
import GreetingData from '../../assets/data/greeting.json';
import { useTheme } from '@emotion/react';
import { checkSetup } from './utils';
import { CalendarNavigatorScreenProps, CalendarRoutes } from '@pf/constants';

const { CALENDAR, CALENDAR_ONBOARDING } = CalendarRoutes;
type Props = CalendarNavigatorScreenProps<typeof CALENDAR>;

export const CalendarScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  const theme = useTheme();
  const inlineStyles = useMemo(() => getStyles(theme), [theme]);

  useEffect(() => {
    (async (): Promise<void> => {
      const setupDone = await checkSetup();
      if (!setupDone) {
        navigate(CALENDAR_ONBOARDING);
      }
    })();
  }, [navigate]);

  return (
    <Container
      style={inlineStyles.container}
      contentContainerStyle={inlineStyles.content}
      showsVerticalScrollIndicator={false}>
      <Content>
        <UserGreeting name="Ana" description={GreetingData.description} />
        <Reminders />
        <PinkFlagCalendar />
        <ExplanationWrapper>
          <CalendarExplanation />
        </ExplanationWrapper>
      </Content>
      <Footer
        copyright="© 2022 Pink Flag. All rights reserved."
        email="zenskainicijativa@gmail.com"
        location="Trg Slobode 3, Novi Sad"
        instagramLink="https://instagram.com"
        facebookLink="https://facebook.com"
      />
    </Container>
  );
};

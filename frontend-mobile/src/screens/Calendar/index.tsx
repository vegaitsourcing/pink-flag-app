import React, { useMemo } from 'react';
import { CalendarExplanation, Footer, PinkFlagCalendar, Reminders, UserGreeting } from '@pf/components';
import { Container, Content, ExplanationWrapper, getStyles } from './styles';
import GreetingData from '../../assets/data/greeting.json';
import { useTheme } from '@emotion/react';

export const CalendarScreen: React.FC = () => {
  const theme = useTheme();
  const inlineStyles = useMemo(() => getStyles(theme), [theme]);

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

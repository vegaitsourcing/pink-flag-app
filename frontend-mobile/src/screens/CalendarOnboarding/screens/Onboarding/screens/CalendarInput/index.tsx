import { PinkFlagCalendar } from '@pf/components';
import React from 'react';
import { Container, StyledTitle, Wrapper } from './styles';

export const CalendarInputScreen: React.FC = () => {
  return (
    <Container>
      <StyledTitle content="Označi dane kada si poslednji put imala menstruaciju" />
      <Wrapper>
        <PinkFlagCalendar />
      </Wrapper>
    </Container>
  );
};

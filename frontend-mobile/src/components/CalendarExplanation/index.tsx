import React from 'react';
import { Explanation } from './Explanation';
import { Container } from './styles';
import ExplanationData from '../../assets/data/calendarExplanation.json';

export const CalendarExplanation: React.FC = () => {
  return (
    <Container>
      <Explanation content={ExplanationData.fertileDays} type="fertileDays" />
      <Explanation content={ExplanationData.ovulation} type="ovulation" />
      <Explanation content={ExplanationData.menstruation} type="menstruation" />
      <Explanation content={ExplanationData.expectedMenstruationDay} type="expectedMenstruation" />
    </Container>
  );
};

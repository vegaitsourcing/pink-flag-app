import React from 'react';
import { SvgBackground } from '../../components';
import { Container, StyledTitle, BulletText, SectionTitle } from './styles';

export const OverviewScreen: React.FC = () => {
  return (
    <Container showsVerticalScrollIndicator={false}>
      <SvgBackground />
      <StyledTitle content="Kalendar je veoma jednostavna aplikacija za praćenje sopstvene menstruacije." />
      <SectionTitle content="Aplikacija ti omogućava da pratiš:" />
      <BulletText
        content="• Plodne dane
• Sledeću ovulaciju
• Predvidjeno vreme za menstruaciju
• Očekivani dan menstruacije"
      />
    </Container>
  );
};

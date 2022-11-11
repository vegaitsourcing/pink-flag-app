import { CustomInput } from '@pf/components';
import React from 'react';
import { Container, StyledTitle } from './styles';

export const NameInputScreen: React.FC = () => {
  return (
    <Container>
      <StyledTitle content="Kako se zoveš?" />
      <CustomInput placeholder="Tvoje ime" />
    </Container>
  );
};

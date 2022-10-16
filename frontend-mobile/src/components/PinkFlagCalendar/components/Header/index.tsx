import React from 'react';
import { getDisplayDate } from './getDisplayDate';
import { Container, StyledCustomText } from './styles';

interface Props {
  date: Date;
}

export const Header: React.FC<Props> = ({ date }) => {
  const displayDate = getDisplayDate(date);

  return (
    <Container>
      <StyledCustomText content={displayDate} />
    </Container>
  );
};

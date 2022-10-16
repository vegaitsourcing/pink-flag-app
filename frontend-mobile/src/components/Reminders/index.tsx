import React from 'react';
import { ReminderLabel } from '../ReminderLabel';
import { Container, Separator } from './styles';

export const Reminders: React.FC = () => {
  return (
    <Container>
      <ReminderLabel content="Period krece za dva dana!" />
      <Separator />
      <ReminderLabel content="Ovulacija krece za dva dana!" type="ovulation" />
    </Container>
  );
};

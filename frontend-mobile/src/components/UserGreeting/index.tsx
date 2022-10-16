import React, { useMemo } from 'react';
import { getGreetingText } from './getGreetingText';
import { Container, Description, Greeting } from './styles';

interface Props {
  name?: string;
  description?: string;
}

export const UserGreeting: React.FC<Props> = ({ name, description }) => {
  const greetingText = useMemo(() => getGreetingText(name), [name]);
  return (
    <Container>
      <Greeting content={greetingText} />
      <Description content={description} />
    </Container>
  );
};

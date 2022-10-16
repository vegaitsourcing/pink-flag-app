import React from 'react';
import { Container, Indicator, StyledCustomText } from './styles';
import { ExplanationType } from './types';

interface Props {
  content: string;
  type: ExplanationType;
}

export const Explanation: React.FC<Props> = ({ content, type }) => {
  return (
    <Container>
      <Indicator type={type} />
      <StyledCustomText content={content} />
    </Container>
  );
};

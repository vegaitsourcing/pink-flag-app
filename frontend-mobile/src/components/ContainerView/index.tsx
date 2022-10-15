import React from 'react';
import { Container } from './style';

interface Props {
  content?: string;
}

export const ContainerView: React.FC<Props> = ({ content, children, ...props }) => {
  return <Container {...props}>{content || children}</Container>;
};

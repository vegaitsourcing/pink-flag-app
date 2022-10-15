import React from 'react';
import { Container } from './style';
import { ViewProps } from 'react-native';

interface Props extends ViewProps {
  content?: string;
}

export const ContainerView: React.FC<Props> = ({ content, children, ...props }) => {
  return <Container {...props}>{content || children}</Container>;
};

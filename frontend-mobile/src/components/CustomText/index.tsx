import React from 'react';
import { TextProps } from 'react-native';
import { StyledText } from './styles';

interface Props extends TextProps {
  content?: string;
}

export const CustomText: React.FC<Props> = ({ content, children, ...props }) => {
  return <StyledText {...props}>{content || children}</StyledText>;
};

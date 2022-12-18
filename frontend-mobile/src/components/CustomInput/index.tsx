import React from 'react';
import { TextInputProps } from 'react-native';
import { Container } from './styles';

const PLACEHOLDER_COLOR = '#8A8A8A';

type Props = TextInputProps;

export const CustomInput: React.FC<Props> = ({ ...props }) => {
  return <Container placeholderTextColor={PLACEHOLDER_COLOR} {...props} />;
};

import React from 'react';
import { TextInputProps } from 'react-native';
import { Container } from './styles';

export const SettingsInput: React.FC<TextInputProps> = ({ ...props }) => {
  return <Container {...props} />;
};

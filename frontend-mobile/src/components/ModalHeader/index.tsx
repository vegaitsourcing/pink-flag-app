import { CloseSvg } from '@pf/assets';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { CloseButton, Container } from './styles';

export const ModalHeader: React.FC = () => {
  const { goBack } = useNavigation();

  return (
    <Container>
      <CloseButton onPress={goBack}>
        <CloseSvg />
      </CloseButton>
    </Container>
  );
};

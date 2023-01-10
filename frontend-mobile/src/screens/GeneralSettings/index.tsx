import React from 'react';
import { ModalHeader as Header } from '@pf/components';
import { Container, Content, StyledPrimaryButton, Title } from './styles';
import { NotificationInput } from './components';
import { useNavigation } from '@react-navigation/native';

export const GeneralSettingsScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header />
      <Title content="Podešavanja" />
      <Content>
        <NotificationInput />
        <StyledPrimaryButton content="Sačuvaj izmene" onPress={navigation.goBack} />
      </Content>
    </Container>
  );
};

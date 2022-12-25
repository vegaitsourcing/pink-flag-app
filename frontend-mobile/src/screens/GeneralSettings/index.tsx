import React from 'react';
import { ModalHeader as Header } from '@pf/components';
import { Container, Content, StyledPrimaryButton, Title } from './styles';
import { useHideBottomTabs } from '@pf/hooks';
import { NotificationInput } from './components';
import { useNavigation } from '@react-navigation/native';

export const GeneralSettingsScreen: React.FC = () => {
  const navigation = useNavigation();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _ = useHideBottomTabs();

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

import React from 'react';
import { ModalHeader as Header } from '@pf/components';
import { Container, Title } from './styles';
import { useHideBottomTabs } from '@pf/hooks';
import { CalendarNavigatorScreenProps, CalendarRoutes } from '@pf/constants';
import { Content } from './components';

const { CALENDAR_SETTINGS } = CalendarRoutes;
type Props = CalendarNavigatorScreenProps<typeof CALENDAR_SETTINGS>;

export const CalendarSettingsScreen: React.FC<Props> = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _ = useHideBottomTabs();

  return (
    <Container>
      <Header />
      <Title content="Podešavanja" />
      <Content />
    </Container>
  );
};

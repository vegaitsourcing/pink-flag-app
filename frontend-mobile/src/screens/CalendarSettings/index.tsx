import React, { useEffect } from 'react';
import { ModalHeader as Header } from '@pf/components';
import { Container } from './styles';
import { useAppDispatch } from '@pf/hooks';
import { toggleCalendarOnboardingStatus } from '@pf/reducers/settingsReducer';
import { CalendarNavigatorScreenProps, CalendarRoutes } from '@pf/constants';

const { CALENDAR_SETTINGS } = CalendarRoutes;
type Props = CalendarNavigatorScreenProps<typeof CALENDAR_SETTINGS>;

export const CalendarSettingsScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(toggleCalendarOnboardingStatus());
  }, [dispatch]);

  useEffect(() => {
    navigation.addListener('beforeRemove', () => {
      dispatch(toggleCalendarOnboardingStatus());
    });
  }, [dispatch, navigation]);

  return (
    <Container>
      <Header />
    </Container>
  );
};

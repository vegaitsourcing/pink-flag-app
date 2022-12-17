/* eslint-disable @typescript-eslint/no-unused-vars */
import { CalendarMarkerStyles, PinkFlagCalendar } from '@pf/components';
import { ValueOf } from '@pf/constants';
import React, { useCallback, useRef, useState } from 'react';
import { DateData } from 'react-native-calendars';
import { Container, StyledTitle, Wrapper } from './styles';

const NOW = new Date().toString();
const isEmptyObject = (obj: object): boolean => {
  return Object.keys(obj).length === 0;
};

interface Props {
  onInputChange: (isValid: boolean) => void;
}

export const CalendarInputScreen: React.FC<Props> = ({ onInputChange }) => {
  const markedDates = useRef<{ [key: string]: ValueOf<typeof CalendarMarkerStyles> }>({});
  // const [markedDates, setMarkedDates] = useState<{ [key: string]: ValueOf<typeof CalendarMarkerStyles> }>({});

  const checkCalendarValidity = useCallback(() => {
    if (isEmptyObject(markedDates.current)) {
      const isValid = false;
      onInputChange(isValid);
      return;
    }

    const isValid = true;
    onInputChange(isValid);
  }, [markedDates, onInputChange]);

  const handleOnDayPress = useCallback(
    (date: DateData) => {
      const hasSelectedDate = Object.prototype.hasOwnProperty.call(markedDates.current, date.dateString);
      if (hasSelectedDate) {
        const { [date.dateString]: _, ...rest } = markedDates.current;
        markedDates.current = rest;
        checkCalendarValidity();
        return;
      }

      markedDates.current = {
        ...markedDates.current,
        [date.dateString]: CalendarMarkerStyles['MenstruationMarker'],
      };
      checkCalendarValidity();
    },
    [checkCalendarValidity],
  );

  return (
    <Container>
      <StyledTitle content="Označi dane kada si poslednji put imala menstruaciju" />
      <Wrapper>
        <PinkFlagCalendar markedDates={markedDates.current} maxDate={NOW} onDayPress={handleOnDayPress} />
      </Wrapper>
    </Container>
  );
};

import { DatePickerModal } from '@pf/components';
import React, { useCallback, useRef, useState } from 'react';
import { Subtitle } from '../../styles';
import { Container, InputContainer, Spacing, StyledSettingsInput, Wrapper, YearWrapper } from './styles';

type BirthdayInputType = {
  day: string;
  month: string;
  year: string;
};

const INITIAL_VALUE = {
  day: '',
  month: '',
  year: '',
};

export const BirthdayInput: React.FC = () => {
  const dateInput = useRef<BirthdayInputType>(INITIAL_VALUE);
  const [date, setDate] = useState(new Date());

  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  const toggleDatePicker = useCallback(() => {
    setIsDatePickerVisible(prevState => !prevState);
  }, []);

  const handleDateConfirmation = useCallback(() => {
    toggleDatePicker();

    const day = `${date.getDate()}`.padStart(2, '0');
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const year = `${date.getFullYear()}`;

    dateInput.current = {
      day,
      month,
      year,
    };
  }, [date, toggleDatePicker]);

  const handleDateCancellation = useCallback(() => {
    toggleDatePicker();
  }, [toggleDatePicker]);

  const handleOnDateChange = useCallback((date: Date) => setDate(date), []);

  return (
    <Container>
      <Subtitle content="Kada si rođena?" />
      <InputContainer>
        <Wrapper onPress={toggleDatePicker}>
          <StyledSettingsInput placeholder="Dan" value={dateInput.current.day} pointerEvents="none" editable={false} />
        </Wrapper>
        <Spacing />
        <Wrapper onPress={toggleDatePicker}>
          <StyledSettingsInput
            placeholder="Mesec"
            value={dateInput.current.month}
            pointerEvents="none"
            editable={false}
          />
        </Wrapper>
        <Spacing />
        <YearWrapper onPress={toggleDatePicker}>
          <StyledSettingsInput
            placeholder="Godina"
            value={dateInput.current.year}
            pointerEvents="none"
            editable={false}
          />
        </YearWrapper>
      </InputContainer>
      <DatePickerModal
        date={date}
        isVisible={isDatePickerVisible}
        hide={toggleDatePicker}
        onDateChange={handleOnDateChange}
        onPressCancel={handleDateCancellation}
        onPressConfirm={handleDateConfirmation}
      />
    </Container>
  );
};

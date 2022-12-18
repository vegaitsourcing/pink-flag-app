import { BottomModal, CustomInput, TransparentButton } from '@pf/components';
import { EMPTY_STRING } from '@pf/constants';
import React, { useCallback, useRef, useState } from 'react';
import { SvgBackground } from '../../components';
import { BirthdayInputType, INITIAL_VALUE, LOCALE, MAX_DATE, MIN_DATE } from './constants';
import {
  Container,
  StyledTitle,
  InputContainer,
  Separator,
  PickerContainer,
  StyledDatePicker,
  StyledPrimaryButton,
  ButtonWrapper,
  BigButtonWrapper,
} from './styles';

interface Props {
  onInputChange: (isValid: boolean) => void;
}

export const BirthdayInputScreen: React.FC<Props> = ({ onInputChange }) => {
  const [date, setDate] = useState(MAX_DATE);
  const dateInput = useRef<BirthdayInputType>(INITIAL_VALUE);
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

    const isValid = true;
    onInputChange(isValid);
  }, [date, onInputChange, toggleDatePicker]);

  const handleDateCancellation = useCallback(() => {
    toggleDatePicker();
    setDate(MAX_DATE);

    dateInput.current = {
      day: EMPTY_STRING,
      month: EMPTY_STRING,
      year: EMPTY_STRING,
    };

    const isValid = false;
    onInputChange(isValid);
  }, [onInputChange, toggleDatePicker]);

  const handleOnDateChange = useCallback((date: Date) => setDate(date), []);

  return (
    <Container>
      <SvgBackground />
      <StyledTitle content="Kada si rođena?" />
      <InputContainer>
        <ButtonWrapper onPress={toggleDatePicker}>
          <CustomInput placeholder="Dan" value={dateInput.current.day} pointerEvents="none" editable={false} />
        </ButtonWrapper>
        <Separator />
        <ButtonWrapper onPress={toggleDatePicker}>
          <CustomInput placeholder="Mesec" value={dateInput.current.month} pointerEvents="none" editable={false} />
        </ButtonWrapper>
        <Separator />
        <BigButtonWrapper onPress={toggleDatePicker}>
          <CustomInput placeholder="Godina" value={dateInput.current.year} pointerEvents="none" editable={false} />
        </BigButtonWrapper>
      </InputContainer>
      <BottomModal headerTitle="Izaberi datum" isVisible={isDatePickerVisible} hide={handleDateCancellation}>
        <PickerContainer>
          <StyledDatePicker
            title={null}
            androidVariant="nativeAndroid"
            mode="date"
            locale={LOCALE}
            minimumDate={MIN_DATE}
            maximumDate={MAX_DATE}
            date={date}
            onDateChange={handleOnDateChange}
          />
          <StyledPrimaryButton content="Potvrdi" onPress={handleDateConfirmation} />
          <TransparentButton content="Odustani" onPress={handleDateCancellation} />
        </PickerContainer>
      </BottomModal>
    </Container>
  );
};

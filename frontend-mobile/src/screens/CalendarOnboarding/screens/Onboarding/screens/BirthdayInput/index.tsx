import { BottomModal, CustomInput, TransparentButton } from '@pf/components';
import React, { useCallback, useState } from 'react';
import { SvgBackground } from '../../components';
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
import { subtractYears } from '@pf/utils';
import { IS_IOS } from '@pf/constants';

const TODAY = new Date();
const MAX_DATE = subtractYears(TODAY, 10);
const MIN_DATE = subtractYears(TODAY, 80);
const LOCALE = IS_IOS ? 'sr-Latn' : 'sr-XZ';

interface Props {
  onInputChange: (isValid: boolean) => void;
}

export const BirthdayInputScreen: React.FC<Props> = ({ onInputChange }) => {
  const [date, setDate] = useState(MAX_DATE);
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  const toggleDatePicker = useCallback(() => {
    setIsDatePickerVisible(prevState => !prevState);
  }, []);

  const handleDateConfirmation = useCallback(() => {
    toggleDatePicker();

    const day = `${date.getDate()}`.padStart(2, '0');
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const year = `${date.getFullYear()}`;

    setDay(day);
    setMonth(month);
    setYear(year);

    const isValid = true;
    onInputChange(isValid);
  }, [date, onInputChange, toggleDatePicker]);

  const handleDateCancellation = useCallback(() => {
    toggleDatePicker();
    setDate(MAX_DATE);

    const EMPTY_STRING = '';
    setDay(EMPTY_STRING);
    setMonth(EMPTY_STRING);
    setYear(EMPTY_STRING);

    const isValid = false;
    onInputChange(isValid);
  }, [onInputChange, toggleDatePicker]);

  return (
    <Container>
      <SvgBackground />
      <StyledTitle content="Kada si rođena?" />
      <InputContainer>
        <ButtonWrapper onPress={toggleDatePicker}>
          <CustomInput placeholder="Dan" value={day} pointerEvents="none" editable={false} />
        </ButtonWrapper>
        <Separator />
        <ButtonWrapper onPress={toggleDatePicker}>
          <CustomInput placeholder="Mesec" value={month} pointerEvents="none" editable={false} />
        </ButtonWrapper>
        <Separator />
        <BigButtonWrapper onPress={toggleDatePicker}>
          <CustomInput placeholder="Godina" value={year} pointerEvents="none" editable={false} />
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
            onDateChange={date => setDate(date)}
          />
          <StyledPrimaryButton content="Potvrdi" onPress={handleDateConfirmation} />
          <TransparentButton content="Odustani" onPress={handleDateCancellation} />
        </PickerContainer>
      </BottomModal>
    </Container>
  );
};

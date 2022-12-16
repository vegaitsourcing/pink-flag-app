import { CustomInput, PickerOption } from '@pf/components';
import { useCustomPicker } from '@pf/hooks';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ScrollView } from 'react-native';
import { SvgBackground } from '../../components';
import { Container, StyledTitle, StyledDescription, styles, Separator, ButtonWrapper } from './styles';

const EMPTY_VALUE = '';
const PERIOD_MAX = 7;
const PERIOD_DEFAULT = 4;
const PERIOD_OFFSET = 1;
const periodOptions = Array.from({ length: PERIOD_MAX }).map((_, index) => ({
  label: `${index + PERIOD_OFFSET}`,
  value: index + PERIOD_OFFSET,
})) as PickerOption<number>[];

const CYCLE_MAX = 21;
const CYCLE_DEFAULT = 8;
const CYCLE_OFFSET = 20;
const cycleOptions = Array.from({ length: CYCLE_MAX }).map((_, index) => ({
  label: `${index + CYCLE_OFFSET}`,
  value: index + CYCLE_OFFSET,
})) as PickerOption<number>[];

interface Props {
  onInputChange: (isValid: boolean) => void;
  currentPageIndex: number;
}

// if (cycleLength && menstruationLength) {
//   const isValid = true;
//   onInputChange(isValid);
//   return;
// }

// const isValid = false;
// onInputChange(isValid);

export const PeriodInputScreen: React.FC<Props> = ({ onInputChange, currentPageIndex }) => {
  const [menstruationLength, setMenstruationLength] = useState('');
  const [cycleLength, setCycleLength] = useState('');
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (currentPageIndex === 3) {
      console.log('Scrolling');
      setTimeout(() => scrollViewRef.current?.scrollToEnd(), 500);
    }
  }, [currentPageIndex]);

  const onPeriodLengthSubmit = useCallback((selectedValue: PickerOption<number>): void => {
    setMenstruationLength(selectedValue.label);
  }, []);

  const onPeriodLengthReject = useCallback((): void => {
    setMenstruationLength(EMPTY_VALUE);
  }, []);

  const onCycleLengthSubmit = useCallback((selectedValue: PickerOption<number>): void => {
    setCycleLength(selectedValue.label);
  }, []);

  const onCycleLengthReject = useCallback((): void => {
    setCycleLength(EMPTY_VALUE);
  }, []);

  const { CustomPickerComponent: PeriodPicker, togglePickerModal: togglePeriodPicker } = useCustomPicker({
    options: periodOptions,
    initialValueIndex: PERIOD_DEFAULT,
    onSubmit: onPeriodLengthSubmit,
    onReject: onPeriodLengthReject,
    modalTitle: 'Izaberi dužinu menstruacije',
  });

  const { CustomPickerComponent: CyclePicker, togglePickerModal: toggleCyclePicker } = useCustomPicker({
    options: cycleOptions,
    initialValueIndex: CYCLE_DEFAULT,
    onSubmit: onCycleLengthSubmit,
    onReject: onCycleLengthReject,
    modalTitle: 'Izaberi dužinu ciklusa',
  });

  return (
    <Container contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false} ref={scrollViewRef}>
      <SvgBackground />
      <StyledDescription content="Kako bi kalendar bio što precizniji neophodno je da uneseš sledeće podatke:" />
      <StyledTitle content="Dužina menstruacije" />
      <ButtonWrapper onPress={togglePeriodPicker}>
        <CustomInput placeholder="U danima" value={menstruationLength} pointerEvents="none" editable={false} />
      </ButtonWrapper>
      <Separator />
      <StyledTitle content="Dužina ciklusa" />
      <ButtonWrapper onPress={toggleCyclePicker}>
        <CustomInput placeholder="U danima" value={cycleLength} pointerEvents="none" editable={false} />
      </ButtonWrapper>
      {PeriodPicker}
      {CyclePicker}
    </Container>
  );
};

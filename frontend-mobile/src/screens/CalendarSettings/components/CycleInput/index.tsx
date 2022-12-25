import { PickerOption } from '@pf/components';
import { EMPTY_STRING } from '@pf/constants';
import { useCustomPicker } from '@pf/hooks';
import React, { useCallback, useRef } from 'react';
import { Subtitle } from '../../styles';
import { SettingsInput } from '../SettingsInput';
import { cycleOptions, CYCLE_DEFAULT } from './constants';
import { Container, Wrapper } from './styles';

export const CycleInput: React.FC = () => {
  const cycleLength = useRef(EMPTY_STRING);

  const handleSelection = useCallback(() => {
    if (cycleLength.current) {
      return;
    }
  }, []);

  const onCycleLengthSubmit = useCallback(
    (selectedValue: PickerOption<number>): void => {
      cycleLength.current = selectedValue.label;
      handleSelection();
    },
    [handleSelection],
  );

  const onCycleLengthReject = useCallback((): void => {
    cycleLength.current = EMPTY_STRING;
    handleSelection();
  }, [handleSelection]);

  const { CustomPickerComponent: CyclePicker, togglePickerModal: toggleCyclePicker } = useCustomPicker({
    options: cycleOptions,
    initialValueIndex: CYCLE_DEFAULT,
    onSubmit: onCycleLengthSubmit,
    onReject: onCycleLengthReject,
    modalTitle: 'Izaberi dužinu ciklusa',
  });

  return (
    <Container>
      <Subtitle content="Poslednja dužina ciklusa u danima?" />
      <Wrapper onPress={toggleCyclePicker}>
        <SettingsInput placeholder="U danima" value={cycleLength.current} pointerEvents="none" editable={false} />
      </Wrapper>
      {CyclePicker}
    </Container>
  );
};

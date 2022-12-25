import { PickerOption } from '@pf/components';
import { EMPTY_STRING } from '@pf/constants';
import { useCustomPicker } from '@pf/hooks';
import React, { useCallback, useRef } from 'react';
import { Subtitle } from '../../styles';
import { SettingsInput } from '../SettingsInput';
import { periodOptions, PERIOD_DEFAULT } from './constants';
import { Container, Wrapper } from './styles';

export const MenstruationInput: React.FC = () => {
  const menstruationLength = useRef(EMPTY_STRING);

  const handleSelection = useCallback(() => {
    if (menstruationLength.current) {
      return;
    }
  }, []);

  const onPeriodLengthSubmit = useCallback(
    (selectedValue: PickerOption<number>): void => {
      menstruationLength.current = selectedValue.label;
      handleSelection();
    },
    [handleSelection],
  );

  const onPeriodLengthReject = useCallback((): void => {
    menstruationLength.current = EMPTY_STRING;
    handleSelection();
  }, [handleSelection]);

  const { CustomPickerComponent: PeriodPicker, togglePickerModal: togglePeriodPicker } = useCustomPicker({
    options: periodOptions,
    initialValueIndex: PERIOD_DEFAULT,
    onSubmit: onPeriodLengthSubmit,
    onReject: onPeriodLengthReject,
    modalTitle: 'Izaberi dužinu menstruacije',
  });

  return (
    <Container>
      <Subtitle content="Poslednja dužina menstruacije u danima?" />
      <Wrapper onPress={togglePeriodPicker}>
        <SettingsInput
          placeholder="U danima"
          value={menstruationLength.current}
          pointerEvents="none"
          editable={false}
        />
      </Wrapper>
      {PeriodPicker}
    </Container>
  );
};

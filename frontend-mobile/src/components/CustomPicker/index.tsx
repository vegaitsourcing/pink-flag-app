import React, { useCallback, useImperativeHandle, useRef, forwardRef } from 'react';
import { BottomModal, ModalHeader } from '../BottomModal';
import { StyledPrimaryButton, PickerContainer } from './styles';
import { Picker } from '@react-native-picker/picker';
import { TransparentButton } from '../TransparentButton';
import { Props, Ref, Option } from './types';

export const CustomPicker = forwardRef<Ref, Props<unknown>>(
  (
    { modalTitle, selectedValue, options, isVisible = false, hide, onSelect, onSubmit, onReject, initialValueIndex },
    ref,
  ) => {
    const androidPickerRef = useRef<Picker<unknown>>(null);
    const selectedOptionIndex = useRef<number>(initialValueIndex);

    useImperativeHandle(ref, () => ({
      focus: () => {
        androidPickerRef.current?.focus();
      },
      blur: () => {
        androidPickerRef.current?.blur();
      },
    }));

    const handleOnSelect = useCallback(
      (itemIndex: number) => {
        selectedOptionIndex.current = itemIndex;
        onSelect?.(itemIndex);
      },
      [onSelect],
    );

    const handleOnSubmit = useCallback(() => {
      onSubmit?.(selectedOptionIndex.current);
      hide();
    }, [hide, onSubmit]);

    const handleOnReject = useCallback(() => {
      onReject?.();
      hide();
    }, [hide, onReject]);

    return (
      <BottomModal isVisible={isVisible} hide={hide}>
        <PickerContainer>
          <ModalHeader content={modalTitle} />
          <Picker selectedValue={selectedValue} onValueChange={(_, itemIndex) => handleOnSelect(itemIndex)}>
            {options.map(option => (
              <Picker.Item key={option.label} label={option.label} value={option.value} />
            ))}
          </Picker>
          <StyledPrimaryButton content="Potvrdi" onPress={handleOnSubmit} />
          <TransparentButton content="Odustani" onPress={handleOnReject} />
        </PickerContainer>
      </BottomModal>
    );
  },
);

export { type Option as PickerOption };

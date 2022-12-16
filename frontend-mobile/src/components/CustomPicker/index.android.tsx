import React, { useCallback, useImperativeHandle, useRef, forwardRef, useMemo } from 'react';
import { BottomModal, ModalHeader } from '../BottomModal';
import { StyledPrimaryButton, PickerContainer, StyledCustomText } from './styles';
import { Picker } from '@react-native-picker/picker';
import ScrollPicker from 'react-native-wheel-scrollview-picker';
import { TransparentButton } from '../TransparentButton';
import { useTheme } from '@emotion/react';
import { Props, Ref } from './types';

export const CustomPicker = forwardRef<Ref, Props<unknown>>(
  ({ modalTitle, options, isVisible = false, hide, onSelect, onSubmit, onReject, initialValueIndex }, ref) => {
    const theme = useTheme();
    const androidPickerRef = useRef<Picker<unknown>>(null);
    const selectedOptionIndex = useRef<number>(initialValueIndex);
    const pickerOptions = options.map(x => x.label);
    const highlightWidth = useMemo(() => options[0].label.length * 10 + 30, [options]);

    useImperativeHandle(ref, () => ({
      focus: () => {
        androidPickerRef.current?.focus();
      },
      blur: () => {
        androidPickerRef.current?.blur();
      },
    }));

    const handleOnSelect = useCallback(
      (_: string | number, itemIndex: number) => {
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
      selectedOptionIndex.current = initialValueIndex;
      hide();
    }, [hide, initialValueIndex, onReject]);

    const renderItem = useCallback((data: string | number) => <StyledCustomText content={data as string} />, []);

    return (
      <BottomModal isVisible={isVisible} hide={hide}>
        <PickerContainer>
          <ModalHeader content={modalTitle} />
          <ScrollPicker
            dataSource={pickerOptions}
            selectedIndex={selectedOptionIndex.current}
            renderItem={renderItem}
            onValueChange={handleOnSelect}
            wrapperHeight={180}
            wrapperColor={theme.colors.white}
            itemHeight={50}
            highlightColor={theme.colors.primary}
            highlightBorderWidth={2}
            highlightWidth={highlightWidth}
          />
          <StyledPrimaryButton content="Potvrdi" onPress={handleOnSubmit} />
          <TransparentButton content="Odustani" onPress={handleOnReject} />
        </PickerContainer>
      </BottomModal>
    );
  },
);

import React, { useCallback, useRef, forwardRef, useMemo } from 'react';
import { BottomModal, ModalHeader } from '../BottomModal';
import { StyledPrimaryButton, PickerContainer, StyledCustomText } from './styles';
import ScrollPicker from 'react-native-wheel-scrollview-picker';
import { TransparentButton } from '../TransparentButton';
import { useTheme } from '@emotion/react';
import { Props, Ref } from './types';

const ITEM_HEIGHT = 50;
const WRAPPER_HEIGHT = 180;
const HIGHLIGHT_BORDER_WIDTH = 2;

export const CustomPicker = forwardRef<Ref, Props<unknown>>(
  ({ modalTitle, options, isVisible = false, hide, onSelect, onSubmit, onReject, initialValueIndex }, ref) => {
    const theme = useTheme();
    const selectedOptionIndex = useRef<number>(initialValueIndex);
    const pickerOptions = options.map(x => x.label);
    const highlightWidth = useMemo(() => options[0].label.length * 10 + 30, [options]);

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
            renderItem={renderItem}
            itemHeight={ITEM_HEIGHT}
            dataSource={pickerOptions}
            onValueChange={handleOnSelect}
            wrapperHeight={WRAPPER_HEIGHT}
            highlightWidth={highlightWidth}
            wrapperColor={theme.colors.white}
            highlightColor={theme.colors.primary}
            selectedIndex={selectedOptionIndex.current}
            highlightBorderWidth={HIGHLIGHT_BORDER_WIDTH}
          />
          <StyledPrimaryButton content="Potvrdi" onPress={handleOnSubmit} />
          <TransparentButton content="Odustani" onPress={handleOnReject} />
        </PickerContainer>
      </BottomModal>
    );
  },
);

import styled from '@emotion/native';
import { CustomText, CustomInput, PrimaryButton } from '@pf/components';
import { WIDTH } from '@pf/constants';
import { unit } from '@pf/utils';
import DatePicker from 'react-native-date-picker';

const SPACING = 16;
const BUTTON_SPACING = 10;
const PICKER_OFFSET = 32;

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const StyledTitle = styled(CustomText)`
  font-size: ${({ theme }) => theme.fontSize.$7};
  margin-bottom: ${({ theme }) => theme.spacing.$1};
  line-height: ${({ theme }) => theme.lineHeight.$6};
  font-weight: ${({ theme }) => theme.fontWeight.$700};
`;

export const ButtonWrapper = styled.TouchableOpacity`
  flex: 1;
`;

export const BigButtonWrapper = styled.TouchableOpacity`
  flex: 1.5;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  flex: 1;
`;

export const Separator = styled.View`
  flex-direction: row;
  width: ${unit(SPACING)};
`;

export const StyledCustomText = styled(CustomInput)`
  flex: 1.5;
`;

export const PickerContainer = styled.View`
  align-items: center;
  padding-bottom: ${({ theme }) => theme.spacing.$2};
  padding-horizontal: ${({ theme }) => theme.spacing.$2};
`;

export const StyledPrimaryButton = styled(PrimaryButton)`
  margin-vertical: ${unit(BUTTON_SPACING)};
`;

export const StyledDatePicker = styled(DatePicker)`
  width: ${unit(WIDTH - PICKER_OFFSET)};
`;

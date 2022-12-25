import styled from '@emotion/native';
import DatePicker from 'react-native-date-picker';
import { WIDTH } from '@pf/constants';
import { unit } from '@pf/utils';
import { PrimaryButton } from '../PrimaryButton';

const PICKER_OFFSET = 32;
const BUTTON_SPACING = 10;

export const PickerContainer = styled.View`
  align-items: center;
  padding-bottom: ${({ theme }) => theme.spacing.$2};
  padding-horizontal: ${({ theme }) => theme.spacing.$2};
`;

export const StyledDatePicker = styled(DatePicker)`
  width: ${unit(WIDTH - PICKER_OFFSET)};
`;

export const StyledPrimaryButton = styled(PrimaryButton)`
  margin-vertical: ${unit(BUTTON_SPACING)};
`;

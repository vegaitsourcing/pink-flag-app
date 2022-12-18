import styled from '@emotion/native';
import { unit } from '@pf/utils';
import { CustomText } from '../CustomText';
import { PrimaryButton } from '../PrimaryButton';

const BUTTON_SPACING = 10;

export const PickerContainer = styled.View`
  padding-bottom: ${({ theme }) => theme.spacing.$2};
  padding-horizontal: ${({ theme }) => theme.spacing.$2};
`;

export const StyledPrimaryButton = styled(PrimaryButton)`
  margin-vertical: ${unit(BUTTON_SPACING)};
`;

export const StyledCustomText = styled(CustomText)`
  font-size: ${({ theme }) => theme.fontSize.$5};
`;

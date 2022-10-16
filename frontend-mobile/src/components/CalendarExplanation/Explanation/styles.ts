import { unit } from '@pf/utils';
import { getIndicatorBorder, getIndicatorColor } from './utils';
import styled from '@emotion/native';
import { CustomText } from '../../CustomText';
import { ExplanationType } from './types';

const INDICATOR_SIZE = 12;
const INDICATOR_SPACING = 12;

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Indicator = styled.View<{ type: ExplanationType }>`
  height: ${unit(INDICATOR_SIZE)};
  width: ${unit(INDICATOR_SIZE)};
  border-radius: ${unit(INDICATOR_SIZE)};
  margin-right: ${unit(INDICATOR_SPACING)};
  background-color: ${({ type }) => getIndicatorColor(type)};
  border: ${({ type }) => getIndicatorBorder(type)};
`;

export const StyledCustomText = styled(CustomText)`
  font-size: ${({ theme }) => theme.fontSize.$5};
  line-height: ${({ theme }) => theme.lineHeight.$4};
  font-weight: ${({ theme }) => theme.fontWeight.$700};
`;

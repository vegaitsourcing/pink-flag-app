import styled from '@emotion/native';
import { unit } from '@pf/utils';
import { CustomText } from '../CustomText';

const TEXT_TOP = 6;
const TEXT_BOTTOM = 3;
const LINE_WIDTH = 4;
const LINE_BORDER_RADIUS = 15;

export const Container = styled.Pressable`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const StyledCustomText = styled(CustomText)`
  color: ${({ theme }) => theme.colors.nav};
  font-size: ${({ theme }) => theme.fontSize.$2};
  line-height: ${({ theme }) => theme.lineHeight.$2};
`;

export const TextWrapper = styled.View`
  margin-top: ${unit(TEXT_TOP)};
  margin-bottom: ${unit(TEXT_BOTTOM)};
`;

export const StyledLine = styled.View<{ width: number; isFocused: boolean }>`
  height: ${unit(LINE_WIDTH)};
  width: ${({ width }) => unit(width)};
  border-radius: ${unit(LINE_BORDER_RADIUS)};
  background-color: ${({ theme, isFocused }) => (isFocused ? theme.colors.primary : 'transparent')};
`;

import styled from '@emotion/native';
import { unit } from '@pf/utils';

const TAB_BAR_HEIGHT = 80;
const BAR_BOTTOM_SPACING = 50;

export const Container = styled.View`
  opacity: 0.97;
  overflow: hidden;
  position: absolute;
  flex-direction: row;
  height: ${unit(TAB_BAR_HEIGHT)};
  bottom: ${unit(BAR_BOTTOM_SPACING)};
  left: ${({ theme }) => theme.spacing.$1};
  right: ${({ theme }) => theme.spacing.$1};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.$1};
`;

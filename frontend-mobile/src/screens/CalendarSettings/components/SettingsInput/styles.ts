import styled from '@emotion/native';
import { unit } from '@pf/utils';

const HEIGHT = 40;
const BACKGROUND_COLOR = '#F1F1F1';
const BORDER_RADIUS = 8;
const PADDING_TOP = 11;
const PADDING_BOTTOM = 7;

export const Container = styled.TextInput`
  height: ${unit(HEIGHT)};
  padding-top: ${unit(PADDING_TOP)};
  background-color: ${BACKGROUND_COLOR};
  border-radius: ${unit(BORDER_RADIUS)};
  padding-bottom: ${unit(PADDING_BOTTOM)};
  font-size: ${({ theme }) => theme.fontSize.$5};
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: ${({ theme }) => theme.fontWeight.$400};
  padding-horizontal: ${({ theme }) => theme.spacing.$1};
`;

import styled from '@emotion/native';
import { unit } from '@pf/utils';

const HEIGHT = 60;
const BACKGROUND_COLOR = '#F1F1F1';
const TEXT_COLOR = '#333333';

export const Container = styled.TextInput`
  width: 100%;
  text-align: center;
  color: ${TEXT_COLOR};
  height: ${unit(HEIGHT)};
  background-color: ${BACKGROUND_COLOR};
  font-size: ${({ theme }) => theme.fontSize.$7};
  line-height: ${({ theme }) => theme.lineHeight.$6};
  font-weight: ${({ theme }) => theme.fontWeight.$700};
  border-radius: ${({ theme }) => theme.borderRadius.$2};
`;

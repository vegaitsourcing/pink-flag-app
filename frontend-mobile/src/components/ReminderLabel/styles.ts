import styled from '@emotion/native';
import { unit } from '@pf/utils';
import { CustomText } from '../CustomText';
import { ReminderType } from './types';

const HEIGHT = 60;

export const Container = styled.ImageBackground`
  overflow: hidden;
  height: ${unit(HEIGHT)};
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius.$2};
`;

export const StyledCustomText = styled(CustomText)<{ type: ReminderType }>`
  font-size: ${({ theme }) => theme.fontSize.$6};
  margin-left: ${({ theme }) => theme.spacing.$2};
  line-height: ${({ theme }) => theme.lineHeight.$5};
  font-weight: ${({ theme }) => theme.fontWeight.$700};
  ${({ theme, type }) => type === 'period' && `color: ${theme.colors.white};`};
`;

import styled from '@emotion/native';
import { CustomText } from '@pf/components';
import { unit } from '@pf/utils';
import { Button } from '../../components';

const TITLE_BOTTOM = 48;
const FONT_SIZE = 14;
const BUTTON_BOTTOM = 54;
const TEXT_TOP = 16;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-horizontal: ${({ theme }) => theme.spacing.$1};
`;

export const StyledButton = styled(Button)`
  margin-bottom: ${unit(BUTTON_BOTTOM)};
  margin-top: ${({ theme }) => theme.spacing.$2};
`;

export const StyledTitle = styled(CustomText)`
  margin-bottom: ${unit(TITLE_BOTTOM)};
  font-size: ${({ theme }) => theme.fontSize.$7};
  line-height: ${({ theme }) => theme.lineHeight.$6};
  font-weight: ${({ theme }) => theme.fontWeight.$700};
`;

export const StyledDescription = styled(CustomText)`
  text-align: center;
  margin-top: ${unit(TEXT_TOP)};
  font-size: ${unit(FONT_SIZE)};
  line-height: ${({ theme }) => theme.lineHeight.$4};
  font-weight: ${({ theme }) => theme.fontWeight.$400};
`;

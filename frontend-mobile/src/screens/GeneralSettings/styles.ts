import { PrimaryButton } from './../../components/PrimaryButton/index';
import { CustomText } from '@pf/components';
import styled from '@emotion/native';
import { unit } from '@pf/utils';

const TITLE_BOTTOM = 8;

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.$1};
`;

export const Title = styled(CustomText)`
  align-self: center;
  margin-bottom: ${unit(TITLE_BOTTOM)};
  font-size: ${({ theme }) => theme.fontSize.$7};
  line-height: ${({ theme }) => theme.lineHeight.$6};
  font-weight: ${({ theme }) => theme.fontWeight.$700};
`;

export const StyledPrimaryButton = styled(PrimaryButton)`
  bottom: 25%;
`;

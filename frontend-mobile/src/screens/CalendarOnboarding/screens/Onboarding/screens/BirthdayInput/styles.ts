import styled from '@emotion/native';
import { CustomText, CustomInput } from '@pf/components';
import { unit } from '@pf/utils';

const SPACING = 16;

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const StyledTitle = styled(CustomText)`
  font-size: ${({ theme }) => theme.fontSize.$7};
  margin-bottom: ${({ theme }) => theme.spacing.$1};
  line-height: ${({ theme }) => theme.lineHeight.$6};
  font-weight: ${({ theme }) => theme.fontWeight.$700};
`;

export const ButtonWrapper = styled.TouchableOpacity`
  flex: 1;
`;

export const BigButtonWrapper = styled.TouchableOpacity`
  flex: 1.5;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  flex: 1;
`;

export const Separator = styled.View`
  flex-direction: row;
  width: ${unit(SPACING)};
`;

export const StyledCustomText = styled(CustomInput)`
  flex: 1.5;
`;

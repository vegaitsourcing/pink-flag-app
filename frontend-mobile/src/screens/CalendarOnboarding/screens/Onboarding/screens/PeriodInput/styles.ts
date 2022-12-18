import styled from '@emotion/native';
import { CustomText, PrimaryButton } from '@pf/components';
import { unit } from '@pf/utils';
import { StyleSheet } from 'react-native';

const SPACING = 32;
const BUTTON_SPACING = 10;
const DESCRIPTION_BOTTOM = 40;

export const Container = styled.ScrollView`
  flex: 1;
`;

export const styles = StyleSheet.create({
  scrollView: {
    alignItems: 'center',
    paddingBottom: 10,
  },
});

export const StyledTitle = styled(CustomText)`
  font-size: ${({ theme }) => theme.fontSize.$7};
  margin-bottom: ${({ theme }) => theme.spacing.$1};
  line-height: ${({ theme }) => theme.lineHeight.$6};
  font-weight: ${({ theme }) => theme.fontWeight.$700};
`;

export const StyledDescription = styled(CustomText)`
  text-align: center;
  margin-bottom: ${unit(DESCRIPTION_BOTTOM)};
  font-size: ${({ theme }) => theme.fontSize.$5};
  line-height: ${({ theme }) => theme.lineHeight.$5};
  font-weight: ${({ theme }) => theme.fontWeight.$400};
`;

export const Separator = styled.View`
  height: ${unit(SPACING)};
`;

export const PickerContainer = styled.View`
  align-items: center;
  padding-bottom: ${({ theme }) => theme.spacing.$2};
  padding-horizontal: ${({ theme }) => theme.spacing.$2};
`;

export const StyledPrimaryButton = styled(PrimaryButton)`
  margin-vertical: ${unit(BUTTON_SPACING)};
`;

export const ButtonWrapper = styled.TouchableOpacity`
  width: 100%;
`;

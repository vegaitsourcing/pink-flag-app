import styled from '@emotion/native';
import { unit } from '@pf/utils';
import { StyleSheet, ViewStyle } from 'react-native';
import { Theme } from 'theme';

const EXPLANATION_TOP = 40;
const EXPLANATION_BOTTOM = 72;

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  padding-horizontal: ${({ theme }) => theme.spacing.$1};
`;

export const ExplanationWrapper = styled.View`
  margin-top: ${unit(EXPLANATION_TOP)};
  margin-bottom: ${unit(EXPLANATION_BOTTOM)};
`;

export const getStyles = (theme: Theme): { [key in 'container' | 'content']: ViewStyle } =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.primary,
    },
    content: {
      backgroundColor: theme.colors.white,
    },
  });

import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Theme } from 'theme';

export const getTextStyles = (
  theme: Theme,
): {
  [key in 'title' | 'title']: TextStyle;
} =>
  StyleSheet.create({
    title: {
      fontWeight: '700',
      color: theme.colors.primary,
      fontSize: theme.fontSize.$7Number,
    },
    shareButtonText: {
      textDecorationLine: 'underline',
      color: 'black',
    },
  });

export const getPageViewStyles = (
  theme: Theme,
): {
  [key in 'pageContainer' | 'header' | 'settings' | 'donationImage' | 'shareButtonContainer']: ViewStyle;
} =>
  StyleSheet.create({
    pageContainer: {
      marginHorizontal: 20,
      marginTop: 35,
      marginBottom: 72,
    },
    header: {
      backgroundColor: 'white',
      paddingTop: 8,
      paddingBottom: 8,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    settings: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    donationImage: {
      resizeMode: 'contain',
      width: '100%',
      height: 250,
    },
    shareButtonContainer: {
      marginTop: 32,
    },
  });

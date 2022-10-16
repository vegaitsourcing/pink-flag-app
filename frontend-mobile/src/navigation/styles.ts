import { StyleSheet, ViewStyle } from 'react-native';

const ICON_SIZE = 25;
const HEADER_HEIGHT = 100;

export const iconStyle = {
  width: ICON_SIZE,
  height: ICON_SIZE,
};

export const styles = StyleSheet.create({
  icon: {
    width: ICON_SIZE,
    height: ICON_SIZE,
  } as ViewStyle,
});

export const header = StyleSheet.create({
  layout: {
    elevation: 1,
    shadowOpacity: 0,
    borderBottomWidth: 2,
    height: HEADER_HEIGHT,
  } as ViewStyle,
});

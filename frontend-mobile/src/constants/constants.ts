import { Dimensions, Platform } from 'react-native';

export const IS_IOS = Platform.OS === 'ios';

const { height, width } = Dimensions.get('window');
export const WIDTH = width;
export const HEIGHT = height;

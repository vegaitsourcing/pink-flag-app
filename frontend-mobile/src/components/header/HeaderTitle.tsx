import { LogoSvg } from '@pf/assets';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export const HeaderTitle: React.FC = () => {
  return (
    <View style={styles.logoContainer}>
      <LogoSvg />
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

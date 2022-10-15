/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export const HeaderTitle: React.FC = () => {
  return (
    <View style={styles.logoContainer}>
      <Image style={{ height: 40 }} resizeMode="contain" source={require('../../assets/images/logo.png')}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export const HeaderRight: React.FC = () => {
  return (
    <View style={styles.imageContainer}>
      <Image source={require('../../assets/icons/settings.png')}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    marginRight: 10,
  },
});

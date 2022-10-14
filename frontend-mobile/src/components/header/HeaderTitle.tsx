import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const settings_icon = '../../assets/icons/settings.png';

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


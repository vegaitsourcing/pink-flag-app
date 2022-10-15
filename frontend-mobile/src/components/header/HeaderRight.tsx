/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { SettingsSvg } from '@pf/assets';
import React, { useState } from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import { Settings } from './Settings';

export const HeaderRight: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = (): void => {
    setModalVisible(true);
  };

  const closeModal = (): void => {
    setModalVisible(false);
  };

  return (
    <>
      <Pressable onPress={openModal}>
        <View style={styles.imageContainer}>
          <SettingsSvg />
        </View>
      </Pressable>
      <Settings closeModal={closeModal} modalIsVisible={modalVisible}></Settings>
    </>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    marginRight: 10,
  },
});

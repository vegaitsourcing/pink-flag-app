/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState } from 'react';
import { StyleSheet, View, Image, Pressable } from 'react-native';
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
          <Image source={require('../../assets/icons/settings.png')}></Image>
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

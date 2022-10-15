import { AppTheme } from '@pf/theme';
import React, { useState } from 'react';
import { Modal, StyleSheet, Switch, View, Pressable } from 'react-native';
import { ExitSvg } from '../../assets';
import { StyledText } from '../CustomText/styles';
import { UiButton } from '../UiButton';

export interface SettingsProps {
  modalIsVisible: boolean;
  closeModal: () => void;
}

export const Settings: React.FC<SettingsProps> = (props: SettingsProps) => {
  const [notificationStatus, setNotificationStatus] = useState(false);

  return (
    <Modal visible={props.modalIsVisible}>
      <View style={styles.settingsContainer}>
        <Pressable onPress={props.closeModal}>
          <View style={styles.exitIconContainer}>
            <ExitSvg></ExitSvg>
          </View>
        </Pressable>

        <View style={styles.titleContainer}>
          <StyledText style={styles.titleText}>Podešavanja</StyledText>
        </View>

        <View style={styles.settingsItemsContainer}>
          <View style={styles.settingsItemContainer}>
            <StyledText style={styles.settingsItemText}>Notifikacija za novi post?</StyledText>
            <Switch
              trackColor={{ false: AppTheme.colors.success, true: AppTheme.colors.success }}
              thumbColor={AppTheme.colors.white}
              ios_backgroundColor={AppTheme.colors.success}
              onValueChange={() => {
                setNotificationStatus(!notificationStatus);
              }}
              value={notificationStatus}
            />
          </View>
        </View>

        <View style={styles.actionContainer}>
          <UiButton
            title="Sačuvaj izmene"
            color={AppTheme.colors.white}
            backgroundColor={AppTheme.colors.primary}
            fontSize={AppTheme.fontSize.$4Number}
            fontWeight={'bold'}
            onPress={() => console.log('test')}></UiButton>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  settingsContainer: {
    flex: 1,
    padding: 20,
  },
  exitIconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: AppTheme.fontSize.$7Number,
  },
  settingsItemsContainer: {
    flex: 6,
  },
  settingsItemContainer: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  settingsItemText: {
    fontSize: AppTheme.fontSize.$5Number,
    fontWeight: 'bold',
  },

  actionContainer: {
    flex: 3,
  },
});

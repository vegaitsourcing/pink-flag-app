import { AppTheme } from '@pf/theme';
import React from 'react';
import { View, ViewProps, StyleSheet, ActivityIndicator } from 'react-native';

interface Props extends ViewProps {
  content?: string;
}

export const ActivityIndicatorContainer: React.FC<Props> = () => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color={AppTheme.colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

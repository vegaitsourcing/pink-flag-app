import React from 'react';
import { View, ViewProps, StyleSheet, ActivityIndicator } from 'react-native';
import { useTheme } from '@emotion/react';

interface Props extends ViewProps {
  content?: string;
}

export const ActivityIndicatorContainer: React.FC<Props> = () => {
  const theme = useTheme();
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color={theme.colors.primary} />
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

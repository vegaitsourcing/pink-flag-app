import { useTheme } from '@emotion/react';
import { AppTheme } from '@pf/theme';
import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { StyledText } from '../CustomText/styles';
import { UiButton } from '../UiButton';

interface Props {
  title: string;
  subtitle: string;
}

export const HomeCalendar: React.FC<Props> = ({ title, subtitle }) => {
  const theme = useTheme();

  return (
    <ImageBackground
      style={{
        margin: theme.spacing.$1Number,
        padding: theme.spacing.$1Number,
      }}
      imageStyle={{ borderRadius: theme.borderRadius.$1Number }}
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      source={require('../../assets/images/home-calendar.png')}>
      <StyledText style={styles.baseText}>{title}</StyledText>
      <StyledText style={styles.innerText}>{subtitle}</StyledText>
      <View style={{ width: 142 }}>
        <UiButton
          title="Otvori kalendar"
          backgroundColor="white"
          fontWeight="400"
          fontSize={theme.fontSize.$3Number}
          color="black"
          onPress={() => console.log('test')}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold',
    fontSize: 32,
    color: 'white',
    marginBottom: 10,
  },
  innerText: {
    color: 'white',
    marginBottom: 30,
    marginRight: 89,
    lineHeight: 22,
    fontSize: AppTheme.fontSize.$5Number,
  },
});

import { AppTheme } from '@pf/theme';
import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { CustomText } from '../CustomText';
import { UiButton } from '../UiButton';

interface Props {
  buttonData: {
    title: string;
    link: string;
  };
  heading: string;
  subheading: string;
}

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
    lineHeight: 22,
    fontSize: AppTheme.fontSize.$5Number,
  },
  container: {
    padding: 40,
    minHeight: 300,
    paddingLeft: 20,
  },
  buttonStyle: {
    backgroundColor: 'white',
    color: 'black',
  },
  buttonContainer: {
    width: 169,
  },
});

export const Intro = ({ buttonData, heading, subheading }: Props): JSX.Element => {
  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <ImageBackground source={require('../../assets/images/intro-background.png')}>
      <View style={styles.container}>
        <CustomText style={styles.baseText}>{heading}</CustomText>
        <CustomText style={styles.innerText}>{subheading}</CustomText>
        <View style={styles.buttonContainer}>
          <UiButton
            backgroundColor={AppTheme.colors.white}
            color={AppTheme.colors.description}
            fontSize={AppTheme.fontSize.$4Number}
            fontWeight={'bold'}
            title={buttonData.title}
            onPress={() => console.log('test')}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

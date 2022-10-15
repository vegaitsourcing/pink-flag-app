import { useTheme } from '@emotion/react';
import { RootNavigatorParams } from '@pf/constants';
import { useNavigation } from '@react-navigation/native';
import React, { useMemo } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { CustomText } from '../CustomText';
import { UiButton } from '../UiButton';
import { StackNavigationProp } from '@react-navigation/stack';

interface Props {
  title: string;
  description: string;
  buttonTitle: string;
}

export const DonateBanner: React.FC<Props> = ({ title, description, buttonTitle }) => {
  const theme = useTheme();
  const { navigate } = useNavigation<StackNavigationProp<RootNavigatorParams>>();

  const styles = useMemo(() => {
    return StyleSheet.create({
      baseText: {
        fontWeight: 'bold',
        fontSize: theme.fontSize.$8Number,
        color: 'white',
        marginBottom: 10,
      },
      innerText: {
        color: 'white',
        marginBottom: 30,
        marginRight: 103,
        lineHeight: 22,
      },
    });
  }, [theme]);

  return (
    <ImageBackground
      style={{
        margin: theme.spacing.$1Number,
        padding: theme.spacing.$1Number,
      }}
      imageStyle={{ borderRadius: theme.borderRadius.$1Number }}
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      source={require('../../assets/images/donation.png')}>
      <CustomText style={styles.baseText}>{title}</CustomText>
      <CustomText style={styles.innerText}>{description}</CustomText>
      <View style={{ marginRight: 242 }}>
        <UiButton
          title={buttonTitle}
          backgroundColor="white"
          fontWeight="400"
          fontSize={theme.fontSize.$3Number}
          color="black"
          onPress={() => navigate('donation')}
        />
      </View>
    </ImageBackground>
  );
};

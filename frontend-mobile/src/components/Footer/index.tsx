/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useTheme } from '@emotion/react';
import { FacebookWhiteSvg, InstagramWhiteSvg } from '@pf/assets';
import { useGetFooterQuery } from '@pf/services';
import React, { useEffect, useMemo } from 'react';
import { StyleSheet, View, ImageBackground, Image } from 'react-native';
import { CustomText } from '../CustomText';

interface Props {
  location: string;
  email: string;
  copyright: string;
  facebookLink?: string;
  instagramLink?: string;
}

export const Footer: React.FC<Props> = ({ location, email, copyright, facebookLink, instagramLink }) => {
  const { data, error, isLoading } = useGetFooterQuery();
  const theme = useTheme();
  const IconInstagram = InstagramWhiteSvg;
  const IconFacebook = FacebookWhiteSvg;

  useEffect(() => {
    console.log(data);
  }, [data]);

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
        marginRight: 103,
        lineHeight: 22,
        marginBottom: 20,
      },
      container: {
        height: 400,
        padding: theme.spacing.$1Number,
      },
      viewContainer: {
        marginTop: theme.spacing.$1Number,
      },
    });
  }, [theme]);

  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <ImageBackground style={styles.container} resizeMode="cover" source={require('../../assets/images/footer.png')}>
      <View style={styles.viewContainer}>
        <CustomText style={styles.baseText}>Kontakt</CustomText>
        <View style={{ marginTop: theme.spacing.$1Number, flexDirection: 'row' }}>
          <View>
            <Image source={require('../../assets/icons/location.svg')} />
            <CustomText style={styles.innerText}>{location}</CustomText>
            <Image source={require('../../assets/icons/mail.svg')} />
            <CustomText style={styles.innerText}>{email}</CustomText>
          </View>
          <View style={{ flexDirection: 'row' }}>
            {instagramLink && <IconInstagram style={{ marginRight: theme.spacing.$1Number }} />}
            {facebookLink && <IconFacebook />}
          </View>
        </View>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <CustomText style={{ textAlign: 'center', marginTop: theme.spacing.$1Number, color: 'white' }}>
          {copyright}
        </CustomText>
      </View>
    </ImageBackground>
  );
};

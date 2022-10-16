import { ScrollView, Image, StyleSheet, View, Text, Share, Button, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import { HeaderRight, HeaderTitle, TitleDonation, Footer } from '@pf/components';

export const DonationScreen: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'PinkFlag',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
      // eslint-disable-next-line no-empty
    } catch (error) {}
  };

  return (
    <View>
      <View style={styles.header}>
        <View>
          <HeaderTitle></HeaderTitle>
        </View>
        <View style={styles.settings}>
          <HeaderRight></HeaderRight>
        </View>
      </View>
      <ScrollView>
        <View style={styles.pageContainer}>
          <TitleDonation></TitleDonation>
          <View>
            {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
            <Image style={styles.donationImage} source={require('../../assets/images/donationScreenImage.png')} />
          </View>
          <Text>Doanciju možete uplatiti na dinarski račun na bilo kom uplatnom mestu koristeći sledeće podatke:</Text>
          <Text>Primalac:</Text>
          <Text>Pink Flag, Trg Slobode 3, 21000 Novi Sad</Text>
          <Text>Broj računa</Text>
          <Text>160-407333-83</Text>
          <Text>Šifra plaćanja</Text>
          <Text>160-407333-83</Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipiscing elit faucibus curae leo et, egestas ornare eget fames enim
            lectus dictumst quis vivamus. Diam varius eget bibendum auctor nulla nam nunc cubilia nullam Lorem ipsum
            dolor sit amet consectetur adipiscing elit faucibus curae leo et, egestas ornare eget fames enim lectus
            dictumst quis vivamus. Diam varius eget bibendum auctor nulla nam nunc cubilia nullam Lorem ipsum dolor sit
            amet consectetur adipiscing elit faucibus curae leo et, egestas ornare eget fames enim lectus dictumst quis
            vivamus. Diam varius eget bibendum auctor nulla nam nunc cubilia nullam
          </Text>
          <View style={styles.shareButtonContainer}>
            {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
            <TouchableOpacity onPress={onShare}>
              <Text style={styles.shareButtonText}>Podeli sa prijateljima</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Footer />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    marginHorizontal: 20,
    marginTop: 35,
    marginBottom: 72,
  },
  header: {
    backgroundColor: 'white',
    paddingTop: 8,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  settings: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  donationImage: {
    resizeMode: 'contain',
    width: '100%',
    height: 250,
  },
  shareButtonContainer: {
    marginTop: 32,
  },
  shareButtonText: {
    textDecorationLine: 'underline',
    color: 'black',
  },
});

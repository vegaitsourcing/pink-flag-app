import {
  ScrollView,
  Image,
  StyleSheet,
  View,
  Text,
  Share,
  Button,
  Touchable,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import { Footer, ActivityIndicatorContainer } from '@pf/components';
import { useGetDonationsPageQuery, BASE_URI } from '@pf/services';
import { DonationsModel } from '@pf/models';
import RenderHtml from 'react-native-render-html';
import { useTheme } from '@emotion/react';
import { getPageViewStyles, getTextStyles } from './styles';

export const DonationScreen: React.FC = () => {
  const { data, error, isLoading } = useGetDonationsPageQuery<DonationsModel>();
  const { width } = useWindowDimensions();
  const theme = useTheme();
  const textStyles = getTextStyles(theme);
  const pageViewStyles = getPageViewStyles(theme);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  // const onShare = async () => {
  //   try {
  //     const result = await Share.share({
  //       message: 'PinkFlag',
  //     });
  //     if (result.action === Share.sharedAction) {
  //       if (result.activityType) {
  //         // shared with activity type of result.activityType
  //       } else {
  //         // shared
  //       }
  //     } else if (result.action === Share.dismissedAction) {
  //       // dismissed
  //     }
  //     // eslint-disable-next-line no-empty
  //   } catch (error) {}
  // };

  return isLoading ? (
    <ActivityIndicatorContainer />
  ) : data ? (
    <ScrollView>
      <View style={pageViewStyles.pageContainer}>
        <Text style={textStyles.title}>{data.title}</Text>
        <View>
          {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
          <Image style={pageViewStyles.donationImage} source={{ uri: BASE_URI + data.image?.meta?.download_url }} />
        </View>
        {data.body && data.body.length && <RenderHtml contentWidth={width} source={{ html: data.body }} />}
        {/* <View style={pageViewStyles.shareButtonContainer}>
            <TouchableOpacity onPress={onShare}>
              <Text style={textStyles.shareButtonText}>Podeli sa prijateljima</Text>
            </TouchableOpacity>
          </View> */}
      </View>
      <Footer />
    </ScrollView>
  ) : null;
};

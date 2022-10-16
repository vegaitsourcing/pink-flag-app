/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { LocaleConfig } from 'react-native-calendars';

export const ConfigureCalendar = (): void => {
  LocaleConfig.locales['sr'] = {
    monthNames: [
      'Januar',
      'Februar',
      'Mart',
      'April',
      'Maj',
      'Jun',
      'Jul',
      'Avgust',
      'Septembar',
      'Oktobar',
      'Novembar',
      'Decembar',
    ],
    monthNamesShort: ['Jan.', 'Feb.', 'Mart', 'April', 'Maj', 'Jun', 'Jul', 'Avg.', 'Sept.', 'Okt.', 'Nov.', 'Dec.'],
    dayNames: ['Nedelja', 'Ponedeljak', 'Utorak', 'Sreda', 'Četvrtak', 'Petak', 'Subota'],
    dayNamesShort: ['Ned', 'Pon', 'Uto', 'Sre', 'Čet', 'Pet', 'Sub'],
  };
  LocaleConfig.defaultLocale = 'sr';
};

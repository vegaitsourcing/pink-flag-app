import { ImageSourcePropType } from 'react-native';
import { ReminderType } from './types';
import PeriodBackground from '../../assets/images/period-background.png';
import OvulationBackground from '../../assets/images/ovulation-background.png';

export const getBackground = (type: ReminderType): ImageSourcePropType => {
  if (type === 'ovulation') {
    return OvulationBackground;
  }

  return PeriodBackground;
};

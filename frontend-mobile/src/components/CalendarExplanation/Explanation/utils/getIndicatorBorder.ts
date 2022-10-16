import { ExplanationType } from '../types';

export const getIndicatorBorder = (type: ExplanationType): string => {
  if (type === 'ovulation') {
    return '1px dashed #F2D056';
  }

  if (type === 'expectedMenstruation') {
    return '1px dashed #EC6767';
  }

  return 'none';
};

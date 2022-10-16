import { ExplanationType } from '../types';

export const getIndicatorColor = (type: ExplanationType): string => {
  if (type === 'fertileDays') {
    return '#F2D056';
  }

  if (type === 'ovulation') {
    return 'rgba(242, 208, 86, 0.1)';
  }

  if (type === 'expectedMenstruation') {
    return 'rgba(236, 103, 103, 0.2)';
  }

  return '#EC6767';
};

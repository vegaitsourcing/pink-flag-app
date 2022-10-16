import { Months } from '../../constants';

export const getDisplayDate = (date: Date): string => {
  const index = date.getMonth().toString() as keyof typeof Months;
  return `${Months[index]} ${date.getFullYear()}`;
};

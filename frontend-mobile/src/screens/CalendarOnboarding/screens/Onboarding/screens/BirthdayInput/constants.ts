import { subtractYears } from '@pf/utils';

export const TODAY = new Date();
export const MAX_DATE = subtractYears(TODAY, 10);

export type BirthdayInputType = {
  day: string;
  month: string;
  year: string;
};

export const INITIAL_VALUE = {
  day: '',
  month: '',
  year: '',
};

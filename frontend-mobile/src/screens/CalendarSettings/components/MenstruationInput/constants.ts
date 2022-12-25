import { PickerOption } from '@pf/components';

export const PERIOD_MAX = 7;
export const PERIOD_DEFAULT = 4;
export const PERIOD_OFFSET = 1;
export const periodOptions = Array.from({ length: PERIOD_MAX }).map((_, index) => ({
  label: `${index + PERIOD_OFFSET}`,
  value: index + PERIOD_OFFSET,
})) as PickerOption<number>[];

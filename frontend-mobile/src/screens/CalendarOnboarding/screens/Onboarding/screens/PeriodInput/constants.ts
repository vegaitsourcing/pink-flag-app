import { PickerOption } from '@pf/components';

export const PERIOD_MAX = 7;
export const PERIOD_DEFAULT = 4;
export const PERIOD_OFFSET = 1;
export const periodOptions = Array.from({ length: PERIOD_MAX }).map((_, index) => ({
  label: `${index + PERIOD_OFFSET}`,
  value: index + PERIOD_OFFSET,
})) as PickerOption<number>[];

export const CYCLE_MAX = 21;
export const CYCLE_DEFAULT = 8;
export const CYCLE_OFFSET = 20;
export const cycleOptions = Array.from({ length: CYCLE_MAX }).map((_, index) => ({
  label: `${index + CYCLE_OFFSET}`,
  value: index + CYCLE_OFFSET,
})) as PickerOption<number>[];

export const THIS_PAGE = 3;
export const SCROLL_TIMEOUT = 500;

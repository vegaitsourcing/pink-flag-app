import { PickerOption } from '@pf/components';

export const CYCLE_MAX = 21;
export const CYCLE_DEFAULT = 8;
export const CYCLE_OFFSET = 20;
export const cycleOptions = Array.from({ length: CYCLE_MAX }).map((_, index) => ({
  label: `${index + CYCLE_OFFSET}`,
  value: index + CYCLE_OFFSET,
})) as PickerOption<number>[];

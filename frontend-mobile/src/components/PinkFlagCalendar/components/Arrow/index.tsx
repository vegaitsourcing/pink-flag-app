import React from 'react';
import { CalendarLeftArrow, CalendarRightArrow } from '@pf/assets';

type Directions = 'left' | 'right';

interface Props {
  direction: Directions;
}

export const Arrow: React.FC<Props> = ({ direction }) => {
  return direction === 'left' ? <CalendarLeftArrow /> : <CalendarRightArrow />;
};

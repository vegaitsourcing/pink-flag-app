import { Theme } from '@emotion/react';
import { unit } from '@pf/utils';
import { PRIMARY, SECONDARY, WHITE, NAV, DESCRIPTION, SUCCESS, WARNING, DANGER, LABEL, BLACK, BLUE } from './colors';

export const AppTheme: Theme = {
  spacing: {
    $1: unit(20),
    $1Number: 20,
  },
  fontSize: {
    $1: unit(10),
    $1Number: 10,
    $2: unit(12),
    $2Number: 12,
    $3: unit(13),
    $3Number: 13,
    $4: unit(15),
    $4Number: 15,
    $5: unit(16),
    $5Number: 16,
    $6: unit(28),
    $6Number: 28,
    $7: unit(22),
    $7Number: 22,
    $8: unit(24),
    $8Number: 24,
  },
  iconSize: {
    $1: unit(20),
    $1Number: 20,
    $2: unit(25),
    $2Number: 25,
  },
  lineHeight: {
    $1: unit(12),
    $2: unit(16),
    $3: unit(20),
    $4: unit(22),
    $5: unit(32),
  },
  borderRadius: {
    $1: unit(24),
    $1Number: 24,
  },
  colors: {
    primary: PRIMARY,
    secondary: SECONDARY,
    nav: NAV,
    description: DESCRIPTION,
    white: WHITE,
    success: SUCCESS,
    warning: WARNING,
    danger: DANGER,
    label: LABEL,
    black: BLACK,
    blue: BLUE,
  },
  fontWeight: {
    $100Number: 100,
    $200Number: 200,
    $300Number: 300,
    $400Number: 400,
    $500Number: 500,
    $600Number: 600,
    $700Number: 700,
    $800Number: 800,
    $900Number: 900,
  },
};

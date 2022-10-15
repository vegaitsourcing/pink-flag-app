import '@emotion/react';
import { Theme as SharedComponentsTheme } from './theme';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends SharedComponentsTheme {}
}

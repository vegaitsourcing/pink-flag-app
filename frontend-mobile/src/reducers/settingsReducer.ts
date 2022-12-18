import { RootState } from '@pf/store';
import { createSlice } from '@reduxjs/toolkit';

interface SettingsState {
  isCalendarOnboardingStarted?: boolean;
}

const initialState: SettingsState = {
  isCalendarOnboardingStarted: false,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleCalendarOnboardingStatus: state => {
      state.isCalendarOnboardingStarted = !state.isCalendarOnboardingStarted;
    },
  },
});

export const { toggleCalendarOnboardingStatus } = settingsSlice.actions;

export const selectSettings = (state: RootState): SettingsState => state.settings;

export const selectIsCalendarOnboardingStarted = (state: RootState): boolean | undefined =>
  selectSettings(state).isCalendarOnboardingStarted;

export default settingsSlice.reducer;

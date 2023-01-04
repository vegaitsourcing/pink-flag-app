import { RootState } from '@pf/store';
import { createSlice } from '@reduxjs/toolkit';

interface SettingsState {
  calendarActivated: boolean;
  calendarNotificationsEnabled: boolean;
  blogNotificationsEnabled: boolean;
}

const initialState: SettingsState = {
  calendarActivated: false,
  calendarNotificationsEnabled: true,
  blogNotificationsEnabled: true,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {},
});

// export const {} = settingsSlice.actions;

export const selectSettings = (state: RootState): SettingsState => state.settings;

export const selectIsCalendarActivated = (state: RootState): boolean | undefined =>
  selectSettings(state).calendarActivated;

export default settingsSlice.reducer;

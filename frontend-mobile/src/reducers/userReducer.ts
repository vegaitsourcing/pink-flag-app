import { RootState } from '@pf/store';
import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  name?: string;
  birthday?: string;
  menstruationLength?: number;
  cycleLength?: number;
}

const initialState: UserState = {
  name: undefined,
  birthday: undefined,
  menstruationLength: undefined,
  cycleLength: undefined,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

// export const {} = userSlice.actions;

export const selectUser = (state: RootState): UserState => state.user;

export const selectUserName = (state: RootState): string | undefined => selectUser(state).name;

export default userSlice.reducer;

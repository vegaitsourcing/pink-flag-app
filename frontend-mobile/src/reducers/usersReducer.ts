// Slice
import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  users: [];
}

const initialState: UserState = {
  users: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUsers: (
      state,
      action: {
        payload: [];
      },
    ) => {
      state.users = action.payload;
    },
  },
});

export default usersSlice.reducer;

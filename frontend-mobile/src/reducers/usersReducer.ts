import { createSlice } from '@reduxjs/toolkit';

// Slice

const slice = createSlice({
  name: 'users',
  initialState: {
    users: [],
  },
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

export const usersReducer = slice.reducer;

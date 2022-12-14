import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import usersReducer from '@pf/reducers/usersReducer';
import settingsReducer from '@pf/reducers/settingsReducer';
import { rootApi } from '@pf/services';

//! TODO: Add persistor.
export const store = configureStore({
  reducer: {
    users: usersReducer,
    settings: settingsReducer,
    [rootApi.reducerPath]: rootApi.reducer,
  },

  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(rootApi.middleware),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

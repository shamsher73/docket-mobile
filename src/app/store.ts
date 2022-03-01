import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import taskSlice from '../features/my-day-tasks/taskSlice';

export const store = configureStore({
  reducer: {
    task: taskSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

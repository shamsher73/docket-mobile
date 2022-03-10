import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import taskSlice from '../screens/my-day-tasks/taskSlice';
import saga from "../screens/my-day-tasks/saga";
import {default as analyticsSaga} from "../screens/dashboard/saga";
import createSagaMiddleware from "redux-saga";
import analyticsSlice from '../screens/dashboard/analyticsSlice';

let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

export const store = configureStore({
  reducer: {
    task: taskSlice,
    analytics: analyticsSlice,
  },
  middleware
});

sagaMiddleware.run(saga);
sagaMiddleware.run(analyticsSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

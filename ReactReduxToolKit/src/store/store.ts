import { configureStore } from '@reduxjs/toolkit';
import laptopReducer from './slices/laptopSlice';
import monitorReducer from './slices/monitorSlice';

export const store = configureStore({
  reducer: {
    laptops: laptopReducer,
    monitors: monitorReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface MonitorState {
  monitors: number;
}

const initialState: MonitorState = {
  monitors: 0
};

export const monitorSlice = createSlice({
  name: 'monitors',
  initialState,
  reducers: {
    incrementMonitors: (state: MonitorState, action: PayloadAction<number>) => {
      state.monitors += action.payload;
    },
    decrementMonitors: (state: MonitorState, action: PayloadAction<number>) => {
      state.monitors -= action.payload;
    },
    resetMonitors: (state: MonitorState) => {
      state.monitors = 0;
    }
  }
});

export const { incrementMonitors, decrementMonitors, resetMonitors } = monitorSlice.actions;
export default monitorSlice.reducer;
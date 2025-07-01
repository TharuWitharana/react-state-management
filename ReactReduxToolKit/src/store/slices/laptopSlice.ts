import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface LaptopState {
  laptops: number;
}

const initialState: LaptopState = {
  laptops: 0
};

export const laptopSlice = createSlice({
  name: 'laptops',
  initialState,
  reducers: {
    incrementLaptos: (state: LaptopState, action: PayloadAction<number>) => {
      state.laptops += action.payload;
    },
    decrementLaptos: (state: LaptopState, action: PayloadAction<number>) => {
      state.laptops -= action.payload;
    },
    resetLaptos: (state: LaptopState) => {
      state.laptops = 0;
    }
  }
});

export const { incrementLaptos, decrementLaptos, resetLaptos } = laptopSlice.actions;
export default laptopSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state) => {
      state.counterVal++;
    },
    decrement: (state) => {
      state.counterVal--;
    },
    Add: (state, action) => {
      state.counterVal += Number.parseInt(action.payload.num1);
    },
    Sub: (state, action) => {
      state.counterVal -= Number.parseInt(action.payload);
    },
  },
});

export const counterAction = counterSlice.actions;

export default counterSlice
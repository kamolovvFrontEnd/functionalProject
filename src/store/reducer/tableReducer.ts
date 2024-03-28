import { createSlice } from "@reduxjs/toolkit";

const tableReducer = createSlice({
  name: "table",
  initialState: {
    data: [],
  },
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
    remove(state, action) {
      state.data = state.data.filter((e) => e.id !== action.payload);
    },
  },
});

export const { setData, remove } = tableReducer.actions;
export default tableReducer.reducer;

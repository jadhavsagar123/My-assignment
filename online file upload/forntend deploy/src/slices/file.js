import { createSlice } from "@reduxjs/toolkit";
import { fileuploads } from "../thunk/file";

const initialState = {
  data: [],
};

export const authSlice = createSlice({
  name: "file",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fileuploads.fulfilled, (state, action) => {});
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;

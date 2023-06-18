import { createSlice } from '@reduxjs/toolkit';
import { fetchRawatInap } from '../reducers/rawatInapReducer';

const initialState = {
  rawatInap: [],
  isLoading: false,
  isSuccess: false,
  isError: null,
};

const rawatInapSlicer = createSlice({
  name: 'rawatInap',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRawatInap.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchRawatInap.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.rawatInap = action.payload;
    });
    builder.addCase(fetchRawatInap.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
  },
});

export default rawatInapSlicer.reducer;

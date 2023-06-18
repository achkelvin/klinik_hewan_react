import { createSlice } from '@reduxjs/toolkit';
import { fetchRawatJalan } from '../reducers/rawatJalanReducer';

const initialState = {
  rawatJalan: [],
  isLoading: false,
  isSuccess: false,
  isError: null,
};

const rawatJalanSlicer = createSlice({
  name: 'rawatJalan',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRawatJalan.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchRawatJalan.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.rawatJalan = action.payload;
    });
    builder.addCase(fetchRawatJalan.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
  },
});

export default rawatJalanSlicer.reducer;

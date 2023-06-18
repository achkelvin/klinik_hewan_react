import { createSlice } from '@reduxjs/toolkit';
import { fetchResep } from '../actions/resepAction';

const initialState = {
  resep: [],
  isLoading: false,
  isSuccess: false,
  isError: null,
};

const resepSlicer = createSlice({
  name: 'resep',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchResep.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchResep.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.resep = action.payload;
    });
    builder.addCase(fetchResep.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
  },
});

export default resepSlicer.reducer;

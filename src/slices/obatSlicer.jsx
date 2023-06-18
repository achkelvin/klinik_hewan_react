import { createSlice } from '@reduxjs/toolkit';
import { fetchObat } from '../reducers/obatReducer';

const ObatSlicer = createSlice({
  name: 'obat',
  initialState: {
    obat: [],
    isLoading: false,
    isSuccess: false,
    isError: null,
  },
  extraReducers(builder) {
    builder.addCase(fetchObat.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchObat.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.obat = action.payload;
    });
    builder.addCase(fetchObat.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
  },
});

export default ObatSlicer.reducer;

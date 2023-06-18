import { createSlice } from '@reduxjs/toolkit';
import { fetchStokObat } from '../reducers/stokObatReducer';

const StokObatSlicer = createSlice({
  name: 'stokObat',
  initialState: {
    stokObat: [],
    isLoading: false,
    isSuccess: false,
    isError: null,
  },

  extraReducers(builder) {
    builder.addCase(fetchStokObat.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchStokObat.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.stokObat = action.payload;
    });
    builder.addCase(fetchStokObat.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
  },
});

export default StokObatSlicer.reducer;

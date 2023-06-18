import { createSlice } from '@reduxjs/toolkit';
import { fetchPasienHewan } from '../reducers/pasienHewanReducer';

const PasienHewanSlicer = createSlice({
  name: 'pasienHewan',
  initialState: {
    pasienHewan: [],
    isLoading: false,
    isSuccess: false,
    isError: null,
  },
  extraReducers(builder) {
    builder.addCase(fetchPasienHewan.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPasienHewan.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.pasienHewan = action.payload;
    });
    builder.addCase(fetchPasienHewan.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
  },
});

export default PasienHewanSlicer.reducer;

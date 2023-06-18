import { createSlice } from '@reduxjs/toolkit';
import { fetchPemilikHewan } from '../reducers/pemilikHewanReducer';

const PemilikHewanSlicer = createSlice({
  name: 'pemilikHewan',
  initialState: {
    pemilikHewan: [],
    isLoading: false,
    isSuccess: false,
    isError: null,
  },
  extraReducers(builder) {
    builder.addCase(fetchPemilikHewan.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPemilikHewan.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.pemilikHewan = action.payload;
    });
    builder.addCase(fetchPemilikHewan.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
  },
});

export default PemilikHewanSlicer.reducer;

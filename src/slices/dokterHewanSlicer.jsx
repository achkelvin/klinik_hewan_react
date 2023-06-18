import { createSlice } from '@reduxjs/toolkit';
import { fetchDokterHewan } from '../reducers/dokterHewanReducer';

const DokterHewanSlicer = createSlice({
  name: 'dokterHewan',
  initialState: {
    dokterHewan: [],
    isLoading: false,
    isSuccess: false,
    isError: null,
  },
  extraReducers(builder) {
    builder.addCase(fetchDokterHewan.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchDokterHewan.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.dokterHewan = action.payload;
    });
    builder.addCase(fetchDokterHewan.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
  },
  reducers: undefined,
});

export default DokterHewanSlicer.reducer;

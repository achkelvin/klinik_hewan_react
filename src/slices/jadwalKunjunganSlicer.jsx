import { createSlice } from '@reduxjs/toolkit';
import { fetchJadwalKunjungan } from '../reducers/jadwalKunjunganReducer';

const initialState = {
  jadwalKunjungan: [],
  isLoading: false,
  isSuccess: false,
  isError: null,
};

const jadwalKunjunganSlicer = createSlice({
  name: 'jadwalKunjungan',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchJadwalKunjungan.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchJadwalKunjungan.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.jadwalKunjungan = action.payload;
    });
    builder.addCase(fetchJadwalKunjungan.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
  },
});

export default jadwalKunjunganSlicer.reducer;

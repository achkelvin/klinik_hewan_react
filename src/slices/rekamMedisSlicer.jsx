import { createSlice } from '@reduxjs/toolkit';
import { fetchRekamMedis } from '../actions/rekamMedisAction';

const initialState = {
  rekamMedis: [],
  isLoading: false,
  isSuccess: false,
  isError: null,
};

const rekamMedisSlicer = createSlice({
  name: 'rekamMedis',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchRekamMedis.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchRekamMedis.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.rekamMedis = action.payload;
    });
    builder.addCase(fetchRekamMedis.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
  },
});

export default rekamMedisSlicer.reducer;

import { createAsyncThunk } from '@reduxjs/toolkit';
import { directus } from '../configs/url';

export const fetchObat = createAsyncThunk('obat/fetchObat', async () => {
  const response = await directus.items('obat').readByQuery({
    fields: ['*.*'],
  });
  return response.data;
});

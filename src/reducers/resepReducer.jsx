import { createAsyncThunk } from '@reduxjs/toolkit';
import { directus } from '../configs/url';

export const fetchResep = createAsyncThunk('resep/fetchResep', async () => {
  const response = await directus.items('resep').readByQuery({
    fields: ['*.*'],
  });
  return response.data;
});

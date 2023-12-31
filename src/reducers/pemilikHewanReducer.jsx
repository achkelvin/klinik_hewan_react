import { createAsyncThunk } from '@reduxjs/toolkit';
import { directus } from '../configs/url';

export const fetchPemilikHewan = createAsyncThunk(
  'pemilikHewan/fetchPemilikHewan',
  async () => {
    const response = await directus.items('pemilik_hewan').readByQuery({
      fields: ['*.*'],
    });
    return response.data;
  }
);

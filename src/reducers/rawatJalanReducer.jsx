import { createAsyncThunk } from '@reduxjs/toolkit';
import { directus } from '../configs/url';

export const fetchRawatJalan = createAsyncThunk(
  'rawatJalan/fetchRawatJalan',
  async () => {
    const response = await directus.items('rawat_jalan').readMany({
      fields: ['*.*'],
    });
    return response.data;
  }
);

import { createAsyncThunk } from '@reduxjs/toolkit';
import { directus } from '../configs/url';

export const fetchRawatInap = createAsyncThunk(
  'rawatInap/fetchRawatInap',
  async () => {
    const response = await directus.items('rawat_inap').readByQuery({
      fields: ['*.*'],
    });
    return response.data;
  }
);

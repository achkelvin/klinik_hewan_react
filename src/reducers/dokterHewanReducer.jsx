import { createAsyncThunk } from '@reduxjs/toolkit';
import { directus } from '../configs/url';

export const fetchDokterHewan = createAsyncThunk(
  'dokterHewan/getDokterHewan',
  async () => {
    const response = await directus.items('dokter_hewan').readMany({
      fields: ['*.*'],
    });
    return response.data;
  }
);

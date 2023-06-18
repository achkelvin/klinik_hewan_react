import { createAsyncThunk } from '@reduxjs/toolkit';
import { directus } from '../configs/url';

export const fetchDokterHewan = createAsyncThunk(
  'dokterHewan/fetchDokterHewan',
  async () => {
    const response = await directus.items('dokter_hewan').readByQuery({
      fields: ['*.*'],
    });
    return response.data;
  }
);

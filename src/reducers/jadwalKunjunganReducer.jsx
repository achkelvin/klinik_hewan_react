import { createAsyncThunk } from '@reduxjs/toolkit';
import { directus } from '../configs/url';

export const fetchJadwalKunjungan = createAsyncThunk(
  'jadwalKunjungan/fetchJadwalKunjungan',
  async () => {
    const response = await directus.items('jadwal_kunjungan').readByQuery({
      fields: ['*.*'],
    });
    return response.data;
  }
);

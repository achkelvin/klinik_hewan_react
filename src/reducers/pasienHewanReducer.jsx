import { createAsyncThunk } from '@reduxjs/toolkit';
import { directus } from '../configs/url';

export const fetchPasienHewan = createAsyncThunk(
  'pemilikHewan/fetchPasienkHewan',
  async () => {
    const response = await directus.items('pasien_hewan').readByQuery({
      fields: ['*.*'],
    });
    return response.data;
  }
);

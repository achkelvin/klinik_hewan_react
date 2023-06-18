import { createAsyncThunk } from '@reduxjs/toolkit';
import { directus } from '../configs/url';

export const fetchRekamMedis = createAsyncThunk(
  'rekamMedis/fetchRekamMedis',
  async () => {
    const response = await directus.items('rekam_medis').readByQuery({
      fields: ['*.*'],
    });
    return response.data;
  }
);

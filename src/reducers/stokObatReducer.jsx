import { createAsyncThunk } from '@reduxjs/toolkit';
import { directus } from '../configs/url';

export const fetchStokObat = createAsyncThunk(
  'stokObat/fetchStokObat',
  async () => {
    const response = await directus.items('stok_obat').readByQuery({
      fields: ['*.*'],
    });
    return response.data;
  }
);

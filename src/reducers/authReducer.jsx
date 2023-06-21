import { createAsyncThunk } from '@reduxjs/toolkit';
import { directus } from '../configs/url';

export const login = createAsyncThunk('auth/login', async (credentials) => {
  try {
    // Send login request to Directus
    await directus.auth.login(credentials);
    // Fetch user data from Directus
    const user = await directus.users.me.read();
    return user;
  } catch (error) {
    throw new Error('Login failed');
  }
});

// Async thunk for logging out
export const logout = createAsyncThunk('auth/logout', async () => {
  await directus.auth.logout();
});

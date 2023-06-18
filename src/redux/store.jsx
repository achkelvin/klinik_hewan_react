import { configureStore } from '@reduxjs/toolkit';
import dokterHewanReducer from '../slices/dokterHewanSlicer';

export const store = configureStore({
  reducer: {
    dokterHewan: dokterHewanReducer,
  },
});

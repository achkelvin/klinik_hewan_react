import { configureStore } from '@reduxjs/toolkit';
import authSlicer from '../slices/authSlicer';
import dokterHewanSlicer from '../slices/dokterHewanSlicer';
import jadwalKunjunganSlicer from '../slices/jadwalKunjunganSlicer';
import obatSlicer from '../slices/obatSlicer';
import pasienHewanSlicer from '../slices/pasienHewanSlicer';
import pemilikHewanSlicer from '../slices/pemilikHewanSlicer';
import rawatInapSlicer from '../slices/rawatInapSlicer';
import rawatJalanSlicer from '../slices/rawatJalanSlicer';
import rekamMedisSlicer from '../slices/rekamMedisSlicer';
import resepSlicer from '../slices/resepSlicer';
import stokObatReducer from '../slices/stokObatReducer';

export const store = configureStore({
  reducer: {
    auth: authSlicer,
    dokterHewan: dokterHewanSlicer,
    jadwalKunjungan: jadwalKunjunganSlicer,
    obat: obatSlicer,
    pasienHewan: pasienHewanSlicer,
    pemilikHewan: pemilikHewanSlicer,
    rawatInap: rawatInapSlicer,
    rawatJalan: rawatJalanSlicer,
    rekamMedis: rekamMedisSlicer,
    resep: resepSlicer,
    stokObat: stokObatReducer,
  },
});

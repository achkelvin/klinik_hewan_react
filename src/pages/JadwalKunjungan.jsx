import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../layout/layout';
import { fetchJadwalKunjungan } from '../reducers/jadwalKunjunganReducer';

function JadwalKunjungan() {
  const { jadwalKunjungan } = useSelector((state) => state.jadwalKunjungan);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJadwalKunjungan());
  }, [dispatch]);
  console.log(jadwalKunjungan);

  return (
    <Layout>
      {jadwalKunjungan.map((jadwal) => (
        <div key={jadwal.id}>
          <h1>{jadwal.dokter?.nama_dokter}</h1>
          <h1>{jadwal.tanggal_kunjungan}</h1>
        </div>
      ))}
    </Layout>
  );
}

export default JadwalKunjungan;

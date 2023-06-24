import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../layout/layout';
import { fetchPasienHewan } from '../reducers/pasienHewanReducer';

function PasienHewan() {
  const { pasienHewan } = useSelector((state) => state.pasienHewan);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPasienHewan());
  }, [dispatch]);
  console.log(pasienHewan);

  return (
    <Layout>
      {pasienHewan.map((pasien) => (
        <div key={pasien.id}>
          <h1>{pasien.nama_pasien}</h1>
          <h1>{pasien.tanggal_kunjungan}</h1>
        </div>
      ))}
    </Layout>
  );
}

export default PasienHewan;

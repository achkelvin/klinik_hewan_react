import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../layout/layout';
import { fetchDokterHewan } from '../reducers/dokterHewanReducer';

function DokterHewan() {
  const { dokterHewan } = useSelector((state) => state.dokterHewan);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDokterHewan());
  }, [dispatch]);
  console.log(dokterHewan);
  // const nomorTelepon =
  //   dokterHewan.length > 0 ? dokterHewan[0].nomor_telepon : '';

  return (
    <Layout>
      {dokterHewan.map((dokter) => (
        <div key={dokter.id}>
          <h1>{dokter.nama}</h1>
          <h1>{dokter.nomor_telepon}</h1>
        </div>
      ))}
    </Layout>
  );
}

export default DokterHewan;

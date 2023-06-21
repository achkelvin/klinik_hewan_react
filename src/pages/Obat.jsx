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
      <ul>
        {pasienHewan.map((pasien) => (
          <li key={pasien.id}>
            <p>{pasien.nama_pasien}</p>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export default PasienHewan;

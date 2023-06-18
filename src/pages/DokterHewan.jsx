import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../layout/layout';
import { fetchDokterHewan } from '../reducers/dokterHewanReducer';

function App() {
  const { dokterHewan } = useSelector((state) => state.dokterHewan);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDokterHewan());
  }, [dispatch]);
  console.log(dokterHewan);
  const nomorTelepon =
    dokterHewan.length > 0 ? dokterHewan[0].nomor_telepon : '';

  return (
    <Layout>
      <h1>{nomorTelepon}</h1>
    </Layout>
  );
}

export default App;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../layout/layout';
import Table from '../components/Table';
import { fetchObat } from '../reducers/obatReducer';

function Obat() {
  const { obat } = useSelector((state) => state.obat);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchObat());
  }, [dispatch]);
  console.table(obat);

  const tableColumns = [
    { id: 'nama_obat', label: 'Nama Obat', width: '10%' },
    { id: 'dosis', label: 'Dosis', width: '10%' },
    { id: 'kategori', label: 'Kategori', width: '10%' },
    { id: 'indikasi', label: 'Indikasi', width: '10%' },
    { id: 'kontraindikasi', label: 'Kontraindikasi', width: '10%' },
    { id: 'efek_samping', label: 'Efek Samping', width: '10%' },
    { id: 'komposisi', label: 'Komposisi', width: '10%' },
    { id: 'deskripsi', label: 'Deskripsi', width: '10%' },
  ];

  const obatData = obat.map((obat) => ({
    id: obat.id,
    nama_obat: obat.nama_obat,
    dosis: obat.dosis,
    kategori: obat.kategori,
    indikasi: obat.indikasi,
    kontraindikasi: obat.kontraindikasi,
    efek_samping: obat.efek_samping,
    komposisi: obat.komposisi,
    deskripsi: obat.deskripsi,
  }));

  return (
    <Layout>
      <Table columns={tableColumns} data={obatData} />
    </Layout>
  );
}

export default Obat;

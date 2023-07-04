import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '../components/Table';
import { fetchPemilikHewan } from '../reducers/pemilikHewanReducer';

function PemilikHewan() {
  const { pemilikHewan } = useSelector((state) => state.pemilikHewan);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPemilikHewan());
  }, [dispatch]);
  console.table(pemilikHewan);

  const tableColumns = [
    { id: 'nama_pemilik', label: 'Nama Pemilik', width: '20%' },
    { id: 'nomor_telepon', label: 'Nomor Telepon', width: '30%' },
    { id: 'alamat', label: 'Alamat', width: '30%' },
    { id: 'email', label: 'Email', width: '20%' },
  ];

  const PemilikHewanData = pemilikHewan.map((pemilik) => ({
    id: pemilik.id,
    nama_pemilik: pemilik.nama_pemilik,
    nomor_telepon: pemilik.nomor_telepon,
    alamat: pemilik.alamat,
    email: pemilik.email,
  }));

  return <Table columns={tableColumns} data={PemilikHewanData} />;
}

export default PemilikHewan;

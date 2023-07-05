import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '../components/Table';
import { fetchResep } from '../reducers/resepReducer';

function Resep() {
  const { resep } = useSelector((state) => state.resep);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchResep());
  }, [dispatch]);
  console.table(resep);

  const tableColumns = [
    { id: 'nama_pasien', label: 'Nama Pasien', width: '20%' },
    { id: 'nama_dokter', label: 'Nama Dokter', width: '20%' },
    { id: 'nama_obat', label: 'Nama Obat', width: '20%' },
    { id: 'instruksi', label: 'Instruksi', width: '20%' },
    { id: 'jumlah', label: 'Jumlah', width: '20%' },
    { id: 'status', label: 'Status', width: '20%' },
  ];

  const resepData = resep.map((resep) => ({
    id: resep.id,
    nama_pasien: resep.pasien.nama_pasien,
    nama_dokter: resep.dokter.nama_dokter,
    nama_obat: resep.obat.nama_obat,
    instruksi: resep.instruksi,
    jumlah: resep.jumlah,
    status: resep.status,
  }));

  return <Table columns={tableColumns} data={resepData} />;
}

export default Resep;

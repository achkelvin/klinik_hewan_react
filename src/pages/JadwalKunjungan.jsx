import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../layout/layout';
import Table from '../components/Table';
import { fetchJadwalKunjungan } from '../reducers/jadwalKunjunganReducer';
import RawatInap from './RawatInap';
import RawatJalan from './RawatJalan';

function JadwalKunjungan() {
  const { jadwalKunjungan } = useSelector((state) => state.jadwalKunjungan);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJadwalKunjungan());
  }, [dispatch]);
  console.table(jadwalKunjungan);

  const tableColumns = [
    { id: 'nama_pasien', label: 'Nama', width: '20%' },
    { id: 'tanggal_kunjungan', label: 'Tanggal Kunjungan', width: '30%' },
    { id: 'dokter', label: 'Dokter', width: '30%' },
    { id: 'jenis_hewan', label: 'Jenis Hewan', width: '20%' },
  ];

  const jadwalKunjunganData = jadwalKunjungan.map((jadwal) => ({
    id: jadwal.id,
    nama_pasien: jadwal.pasien.nama_pasien,
    tanggal_kunjungan: new Date(jadwal.tanggal_kunjungan).toLocaleDateString(),
    dokter: jadwal.dokter.nama_dokter,
    jenis_hewan: jadwal.pasien.jenis_hewan,
  }));

  return (
    <Layout>
      <Table columns={tableColumns} data={jadwalKunjunganData} />
      <RawatInap />
      <RawatJalan />
    </Layout>
  );
}

export default JadwalKunjungan;

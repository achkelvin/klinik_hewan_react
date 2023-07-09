import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../layout/layout';
import Table from '../components/Table';
import { fetchJadwalKunjungan } from '../reducers/jadwalKunjunganReducer';
import RawatInap from './RawatInap';
import RawatJalan from './RawatJalan';
import Typography from '@mui/material/Typography';

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
      <Typography
        className="d-flex justify-content-center align-items-center"
        variant="h4"
        sx={{ m: 2 }}
      >
        Jadwal Kunjungan
      </Typography>
      <Table columns={tableColumns} data={jadwalKunjunganData} />
      <Typography
        className="d-flex justify-content-center align-items-center"
        variant="h4"
        sx={{ m: 2 }}
      >
        Rawat Inap
      </Typography>
      <RawatInap />
      <Typography
        className="d-flex justify-content-center align-items-center"
        variant="h4"
        sx={{ m: 2 }}
      >
        Rawat Jalan
      </Typography>
      <RawatJalan />
    </Layout>
  );
}

export default JadwalKunjungan;

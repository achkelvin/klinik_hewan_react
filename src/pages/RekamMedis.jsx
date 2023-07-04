import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '../components/Table';
import { fetchRekamMedis } from '../reducers/rekamMedisReducer';

function RekamMedis() {
  const { rekamMedis } = useSelector((state) => state.rekamMedis);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRekamMedis());
  }, [dispatch]);
  console.table(rekamMedis);

  const tableColumns = [
    { id: 'nama_pasien', label: 'Nama Pasien', width: '20%' },
    { id: 'tanggal_kunjungan', label: 'Tanggal Kunjungan', width: '20%' },
    { id: 'nama_dokter', label: 'Nama Dokter', width: '20%' },
    { id: 'diagnosa', label: 'Diagnosa', width: '20%' },
    { id: 'catatan', label: 'Catatan', width: '20%' },
  ];

  const RekamMedisData = rekamMedis.map((rekam) => ({
    id: rekam.id,
    nama_pasien: rekam.pasien.nama_pasien,
    tanggal_kunjungan: rekam.kunjungan.tanggal_kunjungan,
    nama_dokter: rekam.dokter.nama_dokter,
    diagnosa: rekam.diagnosa,
    catatan: rekam.catatan,
  }));

  return <Table columns={tableColumns} data={RekamMedisData} />;
}

export default RekamMedis;

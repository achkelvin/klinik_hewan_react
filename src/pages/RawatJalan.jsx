import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '../components/Table';
import { fetchRawatJalan } from '../reducers/rawatJalanReducer';

function RawatJalan() {
  const { rawatJalan } = useSelector((state) => state.rawatJalan);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRawatJalan());
  }, [dispatch]);
  console.table(rawatJalan);

  const tableColumns = [
    { id: 'nama_pasien', label: 'Nama Pasien', width: '25%' },
    { id: 'tanggal_kunjungan', label: 'Tanggal Kunjungan', width: '25%' },
    { id: 'diagnosa', label: 'Diagnosa', width: '25%' },
    { id: 'catatan', label: 'Catatan', width: '25%' },
  ];

  const RawatJalanData = rawatJalan.map((jalan) => ({
    id: jalan.id,
    nama_pasien: jalan.pasien.nama_pasien,
    tanggal_kunjungan: jalan.kunjungan.tanggal_kunjungan,
    diagnosa: jalan.diagnosa.diagnosa,
    catatan: jalan.diagnosa.catatan,
  }));

  return <Table columns={tableColumns} data={RawatJalanData} />;
}

export default RawatJalan;

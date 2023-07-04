import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '../components/Table';
import { fetchRawatInap } from '../reducers/rawatInapReducer';

function RawatInap() {
  const { rawatInap } = useSelector((state) => state.rawatInap);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRawatInap());
  }, [dispatch]);
  console.table(rawatInap);

  const tableColumns = [
    { id: 'nama_pasien', label: 'Nama Pasien', width: '25%' },
    { id: 'tanggal_masuk', label: 'Tanggal Masuk', width: '25%' },
    { id: 'tanggal_keluar', label: 'Tanggal Keluar', width: '25%' },
    { id: 'diagnosa', label: 'Diagnosa', width: '25%' },
  ];

  const RawatInapData = rawatInap.map((inap) => ({
    id: inap.id,
    nama_pasien: inap.pasien.nama_pasien,
    tanggal_masuk: inap.tanggal_masuk.tanggal_kunjungan,
    tanggal_keluar: inap.tanggal_keluar,
    diagnosa: inap.diagnosa.diagnosa,
  }));

  return <Table columns={tableColumns} data={RawatInapData} />;
}

export default RawatInap;

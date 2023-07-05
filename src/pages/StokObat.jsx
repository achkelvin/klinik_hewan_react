import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '../components/Table';
import { fetchStokObat } from '../reducers/stokObatReducer';

function StokObat() {
  const { stokObat } = useSelector((state) => state.stokObat);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStokObat());
  }, [dispatch]);
  console.table(stokObat);

  const tableColumns = [
    { id: 'nama_obat', label: 'Nama Obat', width: '20%' },
    { id: 'bentuk', label: 'Bentuk', width: '20%' },
    { id: 'harga', label: 'Harga', width: '20%' },
    { id: 'stok', label: 'Stok', width: '20%' },
    { id: 'tanggal_kadaluwarsa', label: 'Tanggal Kadaluwarsa', width: '20%' },
  ];

  const stokObatData = stokObat.map((stok) => ({
    id: stok.id,
    nama_obat: stok.obat.nama_obat,
    bentuk: stok.bentuk,
    harga: 'Rp. ' + stok.harga,
    stok: stok.stok,
    tanggal_kadaluwarsa: stok.tanggal_kadaluwarsa,
  }));

  return <Table columns={tableColumns} data={stokObatData} />;
}

export default StokObat;

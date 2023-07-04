import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../layout/layout';
import Table from '../components/Table';
import { fetchPasienHewan } from '../reducers/pasienHewanReducer';
import PropTypes from 'prop-types';

function PasienHewan() {
  const { pasienHewan } = useSelector((state) => state.pasienHewan);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPasienHewan());
  }, [dispatch]);

  const tableColumns = [
    { id: 'nama_pasien', label: 'Nama', width: '20%' },
    { id: 'ras', label: 'Ras', width: '20%' },
    { id: 'tanggal_lahir', label: 'Tgl Lahir', width: '20%' },
    { id: 'jenis_hewan', label: 'Jenis Hewan', width: '20%' },
    { id: 'jenis_kelamin', label: 'Jenis Kelamin', width: '20%' },
  ];

  return (
    <Layout>
      <Table columns={tableColumns} data={pasienHewan} />
    </Layout>
  );
}
// Add prop validation for tableColumns (optional but recommended)
PasienHewan.propTypes = {
  tableColumns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      width: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PasienHewan;

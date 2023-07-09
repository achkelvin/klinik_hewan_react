import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../layout/layout';
import Table from '../components/Table';
import { fetchPasienHewan } from '../reducers/pasienHewanReducer';
import PemilikHewan from './PemilikHewan';
import RekamMedis from './RekamMedis';
import Typography from '@mui/material/Typography';

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
      <Typography
        className="d-flex justify-content-center align-items-center"
        variant="h4"
        sx={{ m: 2 }}
      >
        Pasien Hewan
      </Typography>
      <Table columns={tableColumns} data={pasienHewan} />
      <Typography
        className="d-flex justify-content-center align-items-center"
        variant="h4"
        sx={{ m: 2 }}
      >
        Pemilik Hewan
      </Typography>
      <PemilikHewan />
      <Typography
        className="d-flex justify-content-center align-items-center"
        variant="h4"
        sx={{ m: 2 }}
      >
        Rekam Medis
      </Typography>
      <RekamMedis />
    </Layout>
  );
}

export default PasienHewan;

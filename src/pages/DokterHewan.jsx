import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../layout/layout';
import { fetchDokterHewan } from '../reducers/dokterHewanReducer';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import { getAsset } from '../configs/getAsset';
import Typography from '@mui/material/Typography';

function DokterHewan() {
  const { dokterHewan } = useSelector((state) => state.dokterHewan);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDokterHewan());
  }, [dispatch]);
  // console.log(dokterHewan);
  // console.log(dokterHewan?.foto?.id);
  // console.log(dokterHewan.nama_dokter);
  // const nomorTelepon =
  //   dokterHewan.length > 0 ? dokterHewan[0].nomor_telepon : '';

  return (
    <Layout>
      <Row className="d-flex justify-content-center align-items-center">
        <Typography
          className="d-flex justify-content-center align-items-center"
          variant="h4"
          sx={{ m: 2 }}
        >
          Dokter Hewan
        </Typography>
        {dokterHewan.map((dokter) => (
          <Col key={dokter.id} md={4}>
            <Card className="m-4 p-2">
              <Card.Img
                variant="top"
                src={getAsset(dokter?.foto?.id)}
                width={100}
                height={450}
              />
              <Card.Body>
                <Card.Title>{dokter.nama_dokter}</Card.Title>
                <Card.Text sx={{ mb: 1.5 }}>{dokter.spesialisasi}</Card.Text>
                <Card.Text>{dokter.nomor_telepon}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Layout>
  );
}

export default DokterHewan;

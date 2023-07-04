import React from 'react';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/images/logo.png';

function NavbarComponent() {
  React.useEffect(() => {
    const path = window.location.pathname;
    if (path === '/') {
      document.getElementById('dashboard').classList.add('active');
    } else if (path === '/organization') {
      document.getElementById('organization').classList.add('active');
    } else if (path === '/program') {
      document.getElementById('program').classList.add('active');
    } else if (path.includes('/registration')) {
      document.getElementById('registration').classList.add('active');
    } else if (path.includes('/submission')) {
      document.getElementById('submission').classList.add('active');
    } else if (path === '/sponsorship') {
      document.getElementById('sponsorship').classList.add('active');
    } else if (path === '/general-information') {
      document.getElementById('general-information').classList.add('active');
    } else if (path === '/contact') {
      document.getElementById('contact').classList.add('active');
    }
  }, []);

  return (
    <Navbar
      variant="dark"
      sticky="top"
      expand="lg"
      style={{
        paddingBottom: '0',
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Plus Jakarta Sans',
        backgroundColor: '#1F1F1F',
      }}
    >
      <Container fluid className="justify-content-center">
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ marginBottom: '2%' }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav fill className="col" defaultActiveKey="/">
            <Navbar.Brand href="/">
              <img
                alt=""
                src={logo}
                width="50"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              Klinik Hewan
            </Navbar.Brand>
            <Nav.Link
              className="hover-underline-animation text-white pb-3 pt-3"
              href="/"
              id="dashboard"
            >
              Dashboard
            </Nav.Link>
            <Nav.Link
              className="hover-underline-animation text-white pb-3 pt-3"
              href="/dokter-hewan"
              id="dokter-hewan"
            >
              Dokter Hewan
            </Nav.Link>
            <Nav.Link
              className="hover-underline-animation text-white pb-3 pt-3"
              href="/pasien"
              id="pasien"
            >
              Pasien
            </Nav.Link>
            <Nav.Link
              className="hover-underline-animation text-white pb-3 pt-3"
              href="/jadwal-kunjungan"
              id="jadwal-kunjungan"
            >
              Jadwal Kunjungan
            </Nav.Link>
            <Nav.Link
              className="hover-underline-animation text-white pb-3 pt-3"
              href="/obat"
              id="obat"
            >
              Obat
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;

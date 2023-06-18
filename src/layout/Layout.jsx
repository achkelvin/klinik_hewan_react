import { Container } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <>
      <div width="100%" className="row align-items-center">
        <Navbar />
        <Container>{children}</Container>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

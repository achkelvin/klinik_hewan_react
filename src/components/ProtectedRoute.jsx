/* eslint-disable react/prop-types */
import { Route, useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isAuthenticated }) => {
  const navigate = useNavigate();

  return (
    <Route
      render={(props) => {
        if (isAuthenticated) {
          return <Component {...props} />;
        } else {
          navigate('/login');
        }
      }}
    />
  );
};

export default ProtectedRoute;

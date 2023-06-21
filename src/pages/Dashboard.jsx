import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../reducers/authReducer';
import Layout from '../layout/layout';

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Layout>
      <h2>Welcome, {user?.name}</h2>
      <button onClick={handleLogout}>Logout</button>
    </Layout>
  );
};

export default Dashboard;

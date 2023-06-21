import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import DokterHewan from './pages/DokterHewan';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.user !== null);

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dokter-hewan" element={<DokterHewan />} />
      {isAuthenticated && <Route path="/login" element={<Login />} />}
    </Routes>
  );
}

export default App;

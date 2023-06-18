import { Route, Routes } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import DokterHewan from './pages/DokterHewan';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dokter-hewan" element={<DokterHewan />} />
    </Routes>
  );
}

export default App;

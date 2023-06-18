import { Route, Routes } from 'react-router-dom';

import DokterHewan from './pages/DokterHewan';

function App() {
  return (
    <Routes>
      <Route path="/" element={<DokterHewan />} />
    </Routes>
  );
}

export default App;

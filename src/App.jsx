import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDokterHewan } from './reducers/dokterHewanReducer';

function App() {
  const { dokterHewan } = useSelector((state) => state.dokterHewan);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDokterHewan());
  }, [dispatch]);
  console.log(dokterHewan);

  return (
    <>
      <div></div>
      <h1>Vite + React</h1>
      <p>Sss{dokterHewan[0].nomor_telepon}</p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

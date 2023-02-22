import AuthPage from './Pages/Login';
import { Route, Routes, useNavigate } from 'react-router-dom';
import RegisterCompany from './Pages/Home';
import { useEffect } from 'react';

import './App.scss';

function App() {
  const token = localStorage.getItem('token');

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      return console.log('need login first')
    }
    return navigate('/home');
  }, [navigate, token])

  return (
    <main className='App'>
      {!token ? (
        <Routes>
          <Route path='/' element={<AuthPage />} />
        </Routes>
      ) : (
        <Routes>
          <Route path='/home' element={<RegisterCompany />} />
        </Routes>
      )}
    </main>
  );
}

export default App;

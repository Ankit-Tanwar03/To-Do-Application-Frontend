import './App.css';
import Create_account from './Components/Create_account';
import Login from './Components/Login';
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
      <Route path = "/" element={<Navigate replace to="/login" />} />
      <Route path = "/login" element={<Login />} />
      <Route path = "/createAccount" element={<Create_account />}/>
      </Routes>
    </div>
  );
}

export default App;

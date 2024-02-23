import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Create_account from './Components/Create_account';
import Login from './Components/Login';
import ToDo from './Components/ToDo';

function App() {
  return (
    <div>
      <Routes>
      <Route path = "/" element={<Navigate replace to="/login" />} />
      <Route path = "/login" element={<Login />} />
      <Route path = "/createAccount" element={<Create_account />}/>
      <Route path = "/createTodo" element={<ToDo />}/>
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import StoreContext from './context/store';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/login';
import Users from './pages/users';
import UserDetails from './pages/userDetails';

function App() {
  return (
    <StoreContext>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/users' element={<Users />} />
          <Route path='/user/:id' element={<UserDetails />} />
        </Routes>
      </Router>
    </StoreContext>
  );
}

export default App;

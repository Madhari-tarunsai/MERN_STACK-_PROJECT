import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Public from './DashBoard/Public/Public';
import AdminDashboard from './DashBoard/Admin/AdminDashboard';
import Upload from './DashBoard/Admin/Upload/Upload';



const App = () => {
  const isAdminLoggedIn = !!localStorage.getItem('adminToken');

  return (
    <Routes>
      <Route path="/public" element={<Public />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
        <Route
    path="/admin"
    element={localStorage.getItem("adminToken") ? <AdminDashboard/> : <Navigate to="/login" />}

  />
  <Route element={<Upload/>} path='upload'/>
    </Routes>

  );
};

export default App;

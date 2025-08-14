// src/App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Public from './Pages/Public';
import Login from './Pages/Login';
import AdminRegister from './Pages/AdminRegister';
import AdminDashboard from './Pages/AdminDashboard';

function App() {
  // Temporary auth check (later AuthContext or token verify)
  const isAdminLoggedIn = !!localStorage.getItem('adminToken');

  return (
    <Routes>
      {/* Public page */}
      <Route path="/" element={<Public />} />

      {/* Admin registration (first time) */}
      <Route path="/register" element={<AdminRegister />} />

      {/* Admin login */}
      <Route path="/login" element={<Login />} />

      {/* Admin dashboard with auth check */}
      <Route
        path="/admin"
        element={isAdminLoggedIn ? <AdminDashboard /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}

export default App;

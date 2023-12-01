import { useState } from 'react';
import Navbar from './app/component/Navbar';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Register from './app/pages/register';
import Footer from './app/component/Footer';
import Choose from './app/pages/Choose';
import Login from './app/pages/Login';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <>
      {!isLoginPage && <Navbar />}
      <Routes>
        <Route exact path="/" element={<Register />} />
        <Route exact path="/choose" element={<Choose />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
      {!isLoginPage && <Footer />}
    </>
  );
}

export default App;

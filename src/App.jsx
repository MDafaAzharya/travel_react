import { useState } from 'react'
import Navbar from './app/component/Navbar'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Register from './app/component/register';
import Footer from './app/component/Footer';
import Choose from './app/component/Choose';
import Login from './app/component/Login';
function App() {

  return (
    <>
      <Router>
        <Navbar/>
          <Routes>
              <Route
                  exact
                  path="/"
                  element={<Register />}
              />
              <Route
                  exact
                  path="/choose"
                  element={<Choose />}
              />
               <Route
                  exact
                  path="/login"
                  element={<Login />}
              />
          </Routes>
          <Footer/>
      </Router>
    </>
  )
}
export default App

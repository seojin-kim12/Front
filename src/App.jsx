import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Cart from './pages/Cart'
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <>
      <Router>
        <AnimatePresence>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/detail" element={<Detail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
        </AnimatePresence>
      </Router>
    </>
  );
}

export default App;

import './App.scss';
import './index.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import LoginBypass from './components/LoginBypass';
import FinancialSite from './components/FinancialSite';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="loginbypass" element={<LoginBypass />} />
      </Route>
      <Route path="financial" element={<FinancialSite />} />
    </Routes>
  );
}

export default App;

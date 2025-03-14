import './App.scss';
import './index.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import LoginBypass from './components/LoginBypass';
import Resume from './components/Resume';
import FinancialSite from './components/FinancialSite';

function App() {
  return (
    <Routes>
      <Route path="/sample-financial" element={<FinancialSite />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Loginbypass" element={<LoginBypass />} />
        <Route path="resume" element={<Resume />} />
      </Route>
    </Routes>
  );
}

export default App;

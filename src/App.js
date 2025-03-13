import './App.scss';
import './index.css';

import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/HackMe';
import Resume from './components/Resume';
import HackMeIfYouCan from './components/HackMeIfYouCan';
import LoginBypass from './components/LoginBypass';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path= ""element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="LoginBypass" element={<LoginBypass />} />
      </Route>
    </Routes>
  );
}

export default App;

import './App.scss';
import './index.css';

import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/HackMe';
import Resume from './components/Resume';
import HackMeIfYouCan from './components/HackMeIfYouCan';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path= ""element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="HackMeIfYouCan" element={<HackMeIfYouCan />} />
        <Route path="resume" element={<Resume />} />
      </Route>
    </Routes>
  );
}

export default App;

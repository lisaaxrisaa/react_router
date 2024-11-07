import './App.css';
import { Route, Routes } from 'react-router-dom';
import Red from './components/Red';
import Blue from './components/Blue';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Emma from './components/Emma';
import AutumnEmma from './components/AutumnEmma';
import BedEmma from './components/BedEmma';

function App() {
  return (
    <>
      <div id="container">
        <NavBar />
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/emma" element={<Emma />} />
            <Route path="/autumn-emma" element={<AutumnEmma />} />
            <Route path="/bed-emma" element={<BedEmma />} />
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
          </Routes>
        </div>

        <footer className="navbar">
          <NavBar className="navbar" />
        </footer>
      </div>
    </>
  );
}

export default App;

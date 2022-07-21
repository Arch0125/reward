import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import Programs from './pages/Programs';
import Navbar from './components/Navbar';
import Points from './pages/Points';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <div className='absolute z-20' >
      <Navbar/>
    </div>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/programs" element={<Programs/>} />
      <Route path="/points" element={<Points/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

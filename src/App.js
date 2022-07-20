import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import Programs from './pages/Programs';
import Navbar from './components/Navbar';
import Points from './pages/Points';

function App() {
  return (
    <>
    <div className='absolute z-20' >
      <Navbar/>
    </div>
    <Points/>
    </>
  );
}

export default App;

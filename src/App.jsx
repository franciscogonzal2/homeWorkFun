import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/home';
import HomeWorks from './components/homeWorks/homeWorks';
import Navbar from './components/navBar/navBar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/homeWorks' element={<HomeWorks />} />
      </Routes>
    </div>
  );
}

export default App;

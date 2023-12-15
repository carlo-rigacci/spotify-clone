import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/nav/Navbar';
import Footer from './component/footer/Footer';
import Sidebar from './component/Sidebar';
import Search from './component/Search';
import Playlist from './component/Playlist';
import Albums from './component/Albums';

function App() {
  return (
    
    <div className='bg-black' >
      <Router>
        <div className='flex justify-between '>
          <div className=" "><Sidebar /></div>
        <div className='mt-2'><Navbar/>
        <Albums/>
        </div>
        
        </div>

        <Routes>
          <Route path='/search' element={<Search />}></Route>
          <Route path='/playlist' element={<Playlist />}></Route>
          <Route path='/albums' element={<Albums />}></Route>
          <Route path='/search' element={<Search />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

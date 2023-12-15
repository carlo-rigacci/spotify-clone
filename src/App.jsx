import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/nav/Navbar';
import Footer from './component/footer/Footer';
import Sidebar from './component/Sidebar';
import Search from './component/Search';
import Playlist from './component/Playlist';
import Albums from './component/Albums';
import Section from './component/Section';
import SectionContainer from './component/SectionContainer';

function App() {
  return (
    
    <div className='bg-black' >
      <Router>
        <div className='flex justify-between '>
          <div className=" w-[300px]"><Sidebar /></div>
        <div className='w-[100%]'><Navbar/>
        <div className='flex-col justify-start'>
        <Section/>
        <Section/>
        <Section/>
        </div>
        </div>
        
        </div>

        <Routes>
          <Route path='/search' element={<Search />}></Route>
          <Route path='/playlist' element={<Playlist />}></Route>
          <Route path='/albums' element={<Albums />}></Route>
          <Route path='/search' element={<Search />}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

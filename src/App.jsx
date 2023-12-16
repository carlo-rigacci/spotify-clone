import './App.css';
import { BrowserRouter as Router, Routes, Route , Link } from 'react-router-dom';
import Navbar from './component/nav/Navbar';
import Footer from './component/footer/Footer';
import Sidebar from './component/Sidebar';
import Home from './pages/Home';
import Searchpage from './pages/Searchpage';
import Playlist from './component/section/Playlist';
import Albums from './component/section/Albums';
import Albumpage from './pages/albumpage';
import Playlistpage from './pages/Playlistpage';
import Signuppage from './pages/Signuppage';
import Loginpage from './pages/Loginpage';

function App() {
  return (
    
    <div className='bg-black' >
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='*' element={<Home/>}></Route>
          <Route path='/searchpage' element={<Searchpage />}></Route>
          <Route path='/playlist' element={<Playlist />}></Route>
          <Route path='/album' element={<Albums />}></Route>
          <Route path='/albumpage' element={<Albumpage/>}></Route>
          <Route path='/playlistPage' element={<Playlistpage/>}></Route>
          <Route path='/signuppage' element={<Signuppage/>}></Route>
          <Route path='/loginpage' element={<Loginpage/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

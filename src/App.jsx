import './App.css';
import { BrowserRouter as Router, Routes, Route , Link } from 'react-router-dom';
import Navbar from './component/nav/Navbar';
import Footer from './component/footer/Footer';
import Sidebar from './component/nav/Sidebar';
import Home from './pages/Home';
import Searchpage from './pages/Searchpage';
import Playlist from './component/section/Playlist';
import Albums from './component/section/Albums';
import Albumpage from './pages/albumpage';
import Playlistpage from './pages/Playlistpage';
import Signuppage from './pages/Signuppage';
import Loginpage from './pages/Loginpage';
import Errorpage from './pages/Errorpage';
import Help from './pages/Help';
import NavwithSearch from './component/common/NavwithSearch';

function App() {
  return (
    
    <div className='bg-black' >
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='*' element={<Errorpage/>}></Route>
          <Route path='help' element={<Help/>}></Route>
          <Route path='/searchpage' element={<Searchpage />}></Route>
          <Route path='/playlist' element={<Playlist />}></Route>
          <Route path='/album' element={<Albums />}></Route>
          <Route path='/albumpage' element={<Albumpage/>}></Route>
          <Route path='/playlistPage' element={<Playlistpage/>}></Route>
          <Route path='/signuppage' element={<Signuppage/>}></Route>
          <Route path='/loginpage' element={<Loginpage/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

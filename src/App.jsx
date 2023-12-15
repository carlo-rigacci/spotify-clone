import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from './component/Container';
import Playlist from './component/Playlist';
import Albums from './component/Albums';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/container' element = {<Container />}></Route>
          <Route path='/playlist' element = {<Playlist />}></Route>
          <Route path='/albums' element = {<Albums />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

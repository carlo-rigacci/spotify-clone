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
          <Route>
          <Route path="/playlist" element={<Playlist/>} />
          </Route>
        </Routes>
      </Router>
      <Albums/>
    </>
  );
}

export default App;

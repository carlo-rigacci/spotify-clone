import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from './component/Container';
import Playlist from './component/Playlist'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route>
          <Route path="/Playlist" element={<Playlist/>} />
          </Route>
        </Routes>
      </Router>
      <Container/>
    </>
  );
}

export default App;

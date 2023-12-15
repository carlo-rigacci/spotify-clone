import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/nav/Navbar';
import Footer from './component/footer/Footer';
import Sidebar from './component/Sidebar';
import Search from './component/Search';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path='/search' element={<Search />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

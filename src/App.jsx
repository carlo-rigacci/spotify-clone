import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/nav/Navbar';
import Footer from './component/footer/Footer';


export default function App() {
  return (
    <>
      <Router>
        <Navbar/>             
          <Routes>
            <Route/>
                  
          </Routes>
      </Router>

      <Footer/>
    </>
  );
}




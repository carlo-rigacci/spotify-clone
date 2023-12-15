import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from "./component/Search";
import Container from "./component/Container"


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/Search' element = {<Search />}></Route>
          <Route path='/Container' element = {<Container />}></Route>
        </Routes>
      </Router>
   
     
    </>
  );
}

export default App;

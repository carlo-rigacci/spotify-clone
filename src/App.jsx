import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategoryPage from './Pages/CategoryPage';
import Section from './component/Section';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/CategoryPage' element = {<CategoryPage />}></Route>
          <Route path='/Section' element = {<Section />}>Section</Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

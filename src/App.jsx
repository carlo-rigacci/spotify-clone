import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Wrapper from './component/common/Wrapper';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route></Route>
        </Routes>
      </Router>
      <Wrapper>
        <p>ciao</p>
        </Wrapper>
    </>
  );
}

export default App;

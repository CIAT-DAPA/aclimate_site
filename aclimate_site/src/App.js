import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Router>
        {/* <Menu /> */}
          <Routes>
            <Route exact path='/' element={<Home />} />
          </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;

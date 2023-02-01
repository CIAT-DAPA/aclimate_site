import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Menu from './components/menu/Menu'
import Partners from './pages/partners/Partners';

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Partners' element={<Partners />} />
      </Routes>
    </Router>
  );
}

export default App;

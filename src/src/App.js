import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Menu from "./components/menu/Menu";
import Partners from "./pages/partners/Partners";
import News from "./pages/news/News";

function App() {
  return (
    <Router basename="/aclimate_site">
      <Menu />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Partners" element={<Partners />} />
        <Route path="/News" element={<News />} />
      </Routes>
    </Router>
  );
}

export default App;
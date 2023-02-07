import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Menu from "./components/menu/Menu";
import Partners from "./pages/partners/Partners";
import News from "./pages/news/News";
import Articles from "./pages/articles/Articles";

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Partners" element={<Partners />} />
        <Route path="/News" element={<News />} />
        <Route path="/Articles" element={<Articles />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

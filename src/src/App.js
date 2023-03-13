import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Menu from "./components/menu/Menu";
import Partners from "./pages/partners/Partners";
import News from "./pages/news/News";
import Articles from "./pages/articles/Articles";
import Glossary from "./pages/glossary/Glossary";

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/news" element={<News />} />
        <Route path="/articles" element={<Articles />}></Route>
        <Route path="/glossary" element={<Glossary />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

import "./App.css";
import Home from "./pages/Home";
import DetailPorto from "./pages/DetailPorto";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PagesNotFound from "./pages/PagesNotFound";
import Experience from "./pages/Experience";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portofolio/:id" element={<DetailPorto />} />
        <Route path="/page-not-found" element={<PagesNotFound />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="*" element={<PagesNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

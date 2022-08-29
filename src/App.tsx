import "./App.scss";
import Navbar from "./components/Navbar";

import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { ArticlePage } from "./pages/ArticlePage";

// Componente funcional: É uma função que retorna HTML
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trending" element={<h1>Trending</h1>} />
        <Route path="/categories" element={<h1>Categories</h1>} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/article/:title" element={<ArticlePage />} />
      </Routes>
    </>
  );
}

export default App;

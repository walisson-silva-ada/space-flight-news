import "./App.scss";
import { Article } from "./components/Article";
import Navbar from "./components/Navbar";

// Componente funcional: É uma função que retorna HTML

function App() {
  return (
    <>
      <Navbar />

      <Article />
      <Article />
      <Article />
      <Article />
    </>
  );
}

export default App;

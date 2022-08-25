import "./App.scss";
import { Article } from "./components/Article";
import Navbar from "./components/Navbar";

import thumb1 from "./assets/articleThumb1.png";
import thumb2 from "./assets/articleThumb2.png";
import thumb3 from "./assets/articleThumb3.png";
import { Counter } from "./components/Counter";

// Componente funcional: É uma função que retorna HTML

function App() {
  return (
    <>
      <Navbar />

      <Counter />

      <section style={{ maxWidth: "1120px", margin: "4rem auto" }}>
        <Article
          title="Notícia 1"
          provider="NASA"
          description="Descrição 1"
          thumbnail={thumb1}
        />

        <Article
          title="Notícia 2"
          provider="NASA"
          description="Descrição 2"
          thumbnail={thumb2}
        />

        <Article
          title="Notícia 3"
          provider="NASA"
          description="Descrição 3"
          thumbnail={thumb3}
        />

        <Article title="Notícia 4" provider="NASA" />
      </section>
    </>
  );
}

export default App;

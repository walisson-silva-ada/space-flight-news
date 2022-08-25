import { useState } from "react";
import styles from "./styles.module.scss";

export const Counter: React.FC = () => {
  // Estado
  const [contador, setContador] = useState(0);
  const [nome, setNome] = useState("Counter");

  function handleClickOnButton(type: "increase" | "decrease") {
    let novoContador = contador;

    if (type === "increase") {
      setNome("Aumentar");
      novoContador += 1;
    } else {
      setNome("Diminuir");
      novoContador -= 1;
    }

    setContador(novoContador);
    localStorage.setItem("@space-flight-news/count", String(novoContador));
    console.log(
      "Valor atualizado que será renderizado em tela daqui a pouco:",
      novoContador
    );
  }

  function handleClickOnResetButton() {
    setContador(0);
  }

  return (
    <div className={styles.counter}>
      <h1>{nome}</h1>

      <span>{contador}</span>

      <div>
        <button onClick={() => handleClickOnButton("decrease")}>
          Diminuir
        </button>
        <button onClick={handleClickOnResetButton}>Reset</button>
        <button onClick={() => handleClickOnButton("increase")}>
          Aumentar
        </button>
      </div>
    </div>
  );
};

import { useState, useEffect } from "react";
import styles from "./styles.module.scss";

// useEffect -> side effect -> Efeito colateral

export const Counter: React.FC = () => {
  // Estado
  const [name, setName] = useState("");
  const [contador, setContador] = useState(() => {
    const countValueOnLocalStorage = localStorage.getItem(
      "@space-flight-news/count"
    );

    return Number(countValueOnLocalStorage || "0");
  });

  // useEffect(() => {
  //   const countValueOnLocalStorage = localStorage.getItem(
  //     "@space-flight-news/count"
  //   );

  //   const countValue = Number(countValueOnLocalStorage || "0");
  //   setContador(countValue);

  //   return () => console.log("Componente saiu da tela!");
  // }, []);

  console.log("Aconteceu!");

  function handleClickOnButton(type: "increase" | "decrease") {
    let novoContador = contador;

    if (type === "increase") {
      novoContador += 1;
    } else {
      novoContador -= 1;
    }

    setContador(novoContador);
    localStorage.setItem("@space-flight-news/count", String(novoContador));
    // console.log(
    //   "Valor atualizado que será renderizado em tela daqui a pouco:",
    //   novoContador
    // );
  }

  function handleClickOnResetButton() {
    setContador(0);
    localStorage.setItem("@space-flight-news/count", "0");
  }

  return (
    <div className={styles.counter}>
      <h1>Contador</h1>

      <span>{contador}</span>

      <div>
        <button onClick={() => handleClickOnButton("decrease")}>
          Diminuir
        </button>
        <button onClick={handleClickOnResetButton}>Reset</button>
        <button onClick={() => handleClickOnButton("increase")}>
          Aumentar
        </button>
        <button onClick={() => setName("name")}>Alterar nome</button>
      </div>
    </div>
  );
};

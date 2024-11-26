import { useEffect, useRef, useState } from "react";
import styles from "./App.module.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        className={styles.countInput}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render 숫자: {count.current}</h1>
    </>
  );
}

export default App;

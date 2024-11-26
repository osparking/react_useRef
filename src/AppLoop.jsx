import { useEffect, useState } from "react";
import styles from "./App.module.css";

function AppLoop() {
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("호출됨:", count);
    if (count < 1000000) {
      setCount((count) => count + 1);
    }
  });

  return (
    <>
      <input
        className={styles.countInput}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>수정 횟수: {count.current}</h1>
    </>
  );
}

export default AppLoop;

import { useState } from "react";
import styles from "./styles/CookieClicker.module.css"

export default function CookieCounter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount((prev)=> prev + 1);
  };

  return (
    <div className={styles.cookieBody}>
      <h2>Click me to gain points!</h2>
      <h3>Points: {count}</h3>
      <button onClick={handleIncrease}>
        <img src="cookie2.png" alt="image of a cookie" width="60px" />
      </button>
    </div>
  );
}

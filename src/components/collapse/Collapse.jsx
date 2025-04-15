import { useState } from "react";
import styles from "./Collapse.module.scss"; // optionnel si tu veux le styliser

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.collapse}>
      <button
        className={styles.collapseHeader}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2>{title}</h2>
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && <div className={styles.collapseContent}>{content}</div>}
    </div>
  );
};

export default Collapse;

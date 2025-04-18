import { useRef, useState, useEffect } from "react";
import styles from "./Collapse.module.scss";

const Collapse = ({ title, content, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState("0px");
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className={`${styles.collapse} ${styles[className]}`}>
      <button
        className={styles.collapseHeader}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2>{title}</h2>
        <span>
          <img
            src="/src/assets/arrow-back.png"
            alt="menu déroulant ouvert"
            className={isOpen ? styles.opened : styles.closed}
          />
        </span>
      </button>

      <div
        ref={contentRef}
        className={styles.collapseContent}
        style={{
          maxHeight: maxHeight,
          overflow: "hidden",
          transition: "max-height 0.4s ease",
        }}
      >
        {typeof content === "string" ? <p>{content}</p> : content}
      </div>
    </div>
  );
};

export default Collapse;

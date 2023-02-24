import { useRef } from "react";
import { createPortal } from "react-dom";
import styles from "../CSS Modules/QuesPopup.module.css";
import { db } from "../firebase.js";

function QuesPopup(props) {
  const inputRef = useRef(null);
  async function addQues() {
    props.submit();
    let ques = inputRef.current.value;
    await db.collection("questions").add({ question: ques, answered: false });
  }

  return createPortal(
    <div className={styles.form}>
      <div className={styles.wrapper}>
        <div className={styles.actualForm}>
          <label>Enter your question: </label>
          <input type="text" ref={inputRef} />
          <button onClick={addQues}>Submit</button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default QuesPopup;

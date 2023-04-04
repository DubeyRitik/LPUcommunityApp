import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "../CSS Modules/QuesPopup.module.css";
import { db } from "../firebase.js";

function QuesPopup(props) {
  const [ques, setQues] = useState("");

  async function addQues() {
    console.log("the ques added is: " + ques);
    await db.collection("questions").add({ question: ques, answered: false });
    closePopup();
  }

  function handleInputChange(event) {
    setQues(event.target.value);
  }

  function closePopup() {
    props.close();
  }

  // Close the popup when the user clicks outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (!event.target.closest(`.${styles.actualForm}`)) {
        closePopup();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return createPortal(
    <div className={styles.form}>
      <div className={styles.wrapper}>
        <div className={styles.actualForm}>
          <button className={styles.closeButton} onClick={closePopup}>
            X
          </button>
          <label>Enter your question: </label>
          <input type="text" value={ques} onChange={handleInputChange} />
          <button onClick={addQues}>Submit</button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default QuesPopup;

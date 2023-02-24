import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "../CSS Modules/QuesPopup.module.css";
import { db } from "../firebase.js";

function QuesPopup(props) {
  const inputRef = useRef(null);
  const [showPopup, setShowPopup] = useState(true);

  async function addQues() {
    props.submit();
    let ques = inputRef.current.value;
    await db.collection("questions").add({ question: ques, answered: false });
    setShowPopup(false);
  }

  function closePopup() {
    setShowPopup(false);
  }

  // Close the popup when the user clicks outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return showPopup
    ? createPortal(
        <div className={styles.form}>
          <div className={styles.wrapper}>
            <div className={styles.actualForm}>
              <button className={styles.closeButton} onClick={closePopup}>
                X
              </button>
              <label>Enter your question: </label>
              <input type="text" ref={inputRef} />
              <button onClick={addQues}>Submit</button>
            </div>
          </div>
        </div>,
        document.body
      )
    : null;
}

export default QuesPopup;

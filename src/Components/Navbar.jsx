import React, { useState } from "react";
import styles from "../CSS Modules/Navbar.module.css";
import logo from "../Images/logo.png";
import AnswerQuesDiv from "./AnswerQuesDiv";
import Home from "./Home";
import QuesPopup from "./QuesPopup";
import QuestionDiv from "./QuestionDiv";

function Navbar() {
  const [askQues, setaskQues] = useState(false);
  const [showHome, setShowHome] = useState(true);
  const [ansQues, setansQues] = useState(false);
  const [profile, setProfile] = useState(false);

  function askQuesDiv() {
    setaskQues(!askQues);
  }

  function showHomeDiv() {
    setShowHome(true);
    setansQues(false);
  }
  function ansQuesDiv() {
    setansQues(true);
    setShowHome(false);
  }

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navLeft}>
          <img src={logo} alt="Ask Anything" className={styles.img} />
          <span className={styles.brand}>LPU Community - Ask Anything</span>
        </div>
        <div className={styles.navRight}>
          <button>Profile</button>
          <button>Logout</button>
          {askQues && <QuesPopup submit={askQuesDiv}></QuesPopup>}
        </div>
      </nav>
      <Home></Home>
      <div></div>

      
    </>
  );
}

export default Navbar;

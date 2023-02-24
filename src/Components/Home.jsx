import { useState } from "react";
import Clubs from "./Clubs";
import Competitions from "./Competitions";
import EventsPage from "./EventsPage";
import Mess from "./Mess";
import QNApage from "./QNApage";
import StudyMaterial from "./StudyMaterial";
import styles from "../CSS Modules/Home.module.css";
import HomePage from "./HomePage";

export default function Home() {
  const [showQnA, setShowQnA] = useState(false);
  const [showEvents, setShowEvents] = useState(false);
  const [showMess, setShowMess] = useState(false);
  const [showStudyMaterial, setShowStudyMaterial] = useState(false);
  const [showClubs, setShowClubs] = useState(false);
  const [showCompetitions, setShowCompetitions] = useState(false);
  const [showHome, setShowHome] = useState(true);

  function showHomeDiv() {
    setShowHome(true);
    setShowQnA(false);
    setShowEvents(false);
    setShowMess(false);
    setShowStudyMaterial(false);
    setShowClubs(false);
    setShowCompetitions(false);
  }

  function showQnADiv() {
    setShowHome(false);
    setShowQnA(true);
    setShowEvents(false);
    setShowMess(false);
    setShowStudyMaterial(false);
    setShowClubs(false);
    setShowCompetitions(false);
  }

  function showEventsDiv() {
    setShowHome(false);
    setShowQnA(false);
    setShowEvents(true);
    setShowMess(false);
    setShowStudyMaterial(false);
    setShowClubs(false);
    setShowCompetitions(false);
  }

  function showMessDiv() {
    setShowHome(false);
    setShowQnA(false);
    setShowEvents(false);
    setShowMess(true);
    setShowStudyMaterial(false);
    setShowClubs(false);
    setShowCompetitions(false);
  }

  function showClubsDiv() {
    setShowHome(false);
    setShowQnA(false);
    setShowEvents(false);
    setShowMess(false);
    setShowStudyMaterial(false);
    setShowClubs(true);
    setShowCompetitions(false);
  }

  function showStudyMaterialDiv() {
    setShowHome(false);
    setShowQnA(false);
    setShowEvents(false);
    setShowMess(false);
    setShowStudyMaterial(true);
    setShowClubs(false);
    setShowCompetitions(false);
  }

  function showCompetitionsDiv() {
    setShowHome(false);
    setShowQnA(false);
    setShowEvents(false);
    setShowMess(false);
    setShowStudyMaterial(false);
    setShowClubs(false);
    setShowCompetitions(true);
  }

  return (
    <div>
      <div className={styles.homeParent}>
        <div className={styles.container}>
          <div className={styles.dummy}>
            <button onClick={showHomeDiv} className={styles.btn}>
              Home
            </button>
            <button onClick={showEventsDiv} className={styles.btn}>
              Events
            </button>
            <button onClick={showQnADiv} className={styles.btn}>
              Question & Answer
            </button>
            <button onClick={showStudyMaterialDiv} className={styles.btn}>
              Study Materials
            </button>
            <button onClick={showClubsDiv} className={styles.btn}>
              Clubs
            </button>
            <button onClick={showCompetitionsDiv} className={styles.btn}>
              Competitions
            </button>
            <button onClick={showMessDiv} className={styles.btn}>
              Mess
            </button>
          </div>
        </div>
        <div className={styles.page}>
          {showHome && <HomePage></HomePage>}
          {showQnA && <QNApage></QNApage>}
          {showEvents && <EventsPage></EventsPage>}
          {showMess && <Mess></Mess>}
          {showStudyMaterial && <StudyMaterial></StudyMaterial>}
          {showClubs && <Clubs></Clubs>}
          {showCompetitions && <Competitions></Competitions>}
        </div>
      </div>
    </div>
  );
}

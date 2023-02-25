import styles from "../CSS Modules/qna.module.css";
import QuesPopup from "./QuesPopup";
import Question from "./Question";
import QuestionDiv from "./QuestionDiv";
import AnswerQuesDiv from "./AnswerQuesDiv";
import cn from "classnames";
import { useState } from "react";

export default function QNApage() {
  const [showAllAns, setShowAllAns] =  useState(true);
  const [showQuesPopup, setShowQuesPopup] = useState(false);
  const [showUnanswered, setShowUnanswered] = useState(false);

  function showAllAnswer() {
    setShowAllAns(true);
    setShowQuesPopup(false);
    setShowUnanswered(false);
  }

  function showPopup() {
    setShowQuesPopup(true);
  }

  function showUnansweredQues() {
    setShowAllAns(false);
    setShowQuesPopup(false);
    setShowUnanswered(true);
  }

  return (
    <div>
      <div className={styles.qnaHead}>
        <button
          className={cn(styles.qnaBtn, {
            [styles.active]: showAllAns,
          })}
          onClick={showAllAnswer}
        >
          All Answers
        </button>
        <button
          className={cn(styles.qnaBtn, {
            [styles.active]: showQuesPopup,
          })}
          onClick={showPopup}
        >
          Ask Question
        </button>
        <button
          className={cn(styles.qnaBtn, {
            [styles.active]: showUnanswered,
          })}
          onClick={showUnansweredQues}
        >
          Answer Question
        </button>
      </div>
      <div>
        {showAllAns && <QuestionDiv></QuestionDiv>}
        {showQuesPopup && <QuesPopup className={styles.quesPopup}></QuesPopup>}
        {showUnanswered && <AnswerQuesDiv></AnswerQuesDiv>}
      </div>
    </div>
  );
}

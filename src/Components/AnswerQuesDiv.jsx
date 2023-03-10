import React, { useState, useEffect } from "react";
import styles from "../CSS Modules/AnswerQuesDiv.module.css";
import UnansweredQues from "./UnansweredQues";
import { db } from "../firebase";

function AnswerQuesDiv() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    db.collection("questions")
      .where("answered", "==", false)
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        setQuestions(data);
      });
  }, []);

  return (
    <div className={styles.answerDiv}>
      <h2 className={styles.title}>Unanswered Questions</h2>
      {questions.map((question, index) => (
        <UnansweredQues
          key={question.id}
          question={question}
          index={index}
        />
      ))}
    </div>
  );
}

export default AnswerQuesDiv;

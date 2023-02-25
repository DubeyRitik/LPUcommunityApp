import React, { useState, useEffect } from "react";
import styles from "../CSS Modules/QuestionDiv.module.css";
import Question from "./Question";
import { db } from "../firebase";

function QuestionDiv() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const questionsSnapshot = await db
        .collection("questions")
        .where("answered", "==", true)
        .get();
      setQuestions(questionsSnapshot.docs.map((doc) => doc.data()));
    };

    fetchData();
  }, []);

  return (
    <div className={styles.homeParent}>
      {/* <div className={styles.categories}>Categories</div> */}

      <div className={styles.quesDiv}>
        {questions.map((question) => (
          <Question
            question={question.ques}
            answer={question.answer}
            key={question.id}
            user={question.user}
            likes={question.likes}
            id={question.id}
          />
        ))}
      </div>
    </div>
  );
}

export default QuestionDiv;

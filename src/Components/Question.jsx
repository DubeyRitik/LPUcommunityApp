import { useState, useEffect } from "react";
import styles from "../CSS Modules/Question.module.css";
import logo from "../Images/logo.png";
import Image from "../Images/image.jpg";
import { db } from "../firebase";

function Question(props) {
  const [likes, setLikes] = useState(0);

  let q = props.question;
  let a = props.answer;
  let user = props.user;
  let id = props.id;

  const handleLike = () => {
    setLikes(likes + 1);
    db.collection("questions")
      .where("id", "===", id)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          doc.ref.update({ likes: likes + 1 });
        });
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  };

  const handleDislike = () => {
    setLikes(likes - 1);
    db.collection("questions")
      .where("id", "===", id)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          doc.ref.update({ likes: likes - 1 });
        });
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  };

  useEffect(() => {
    db.collection("questions")
      .where("id", "==", id)
      .get()
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          setLikes(doc.data().likes || 0);
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [id]);

  return (
    <div className={styles.question}>
      <div className={styles.profile}>
        <img className="profilepic" src={Image} alt="profile" />
        <div className={styles.profileName}>
          <h2> {user} </h2>
          <h3>B.Tech CSE 3rd year</h3>
        </div>
      </div>

      <div className={styles.qa}>
        <h1> {q}</h1>
        <p> {a} </p>
        <div>
          <button onClick={handleLike}>Like</button>
          <span>{likes}</span>
          <button onClick={handleDislike}>Dislike</button>
        </div>
      </div>
    </div>
  );
}

export default Question;

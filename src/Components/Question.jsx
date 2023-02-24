import { useState } from "react";
import styles from "../CSS Modules/Question.module.css";
import logo from "../Images/logo.png";
import Image from "../Images/image.jpg";

function Question(props) {
  const [likes, setLikes] = useState(props.likes || 0);

  let q = props.question;
  let a = props.answer;
  let user = props.user;
  // const u = localStorage.getItem("loggedInUser");

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setLikes(likes - 1);
  };

  return (
    <div className={styles.question}>
      <div className={styles.profile}>
        <img className="profilepic" src={Image} alt="profile" />
        <div className={styles.profileName}>
          <h2> {user} </h2>
          <h3>UI/UX developer, B.Tech CSE 3rd year</h3>
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

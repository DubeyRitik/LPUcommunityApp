import styles from "../CSS Modules/Question.module.css";
import logo from "../Images/logo.png";
import Image from "../Images/image.jpg";


function Question(props) {
  let q = props.question;
  let a = props.answer;
  return (
    <div className={styles.question}>
      <div className={styles.profile}>
        <img className="profilepic" src={Image} alt="profile" />
        <div className={styles.profileName}>
          <h2>Aakash Kumar</h2>
          <h3>UI/UX developer, B.Tech CSE 3rd year</h3>
        </div>
      </div>

      <div className={styles.qa}>
        <h1> {q}</h1>
        <p> {a} </p>
      </div>
    </div>
  );
}

export default Question;

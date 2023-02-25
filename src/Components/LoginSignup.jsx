import { useState } from "react";
import styles from "../CSS Modules/LoginSignup.module.css";
import { db } from "../firebase";

export default function LoginSignup(props) {
  const [signupName, setSignupName] = useState("");
  const [signupUsername, setSignupUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleSignup = () => {
    db.collection("users")
      .add({
        name: signupName,
        username: signupUsername,
        password: signupPassword,
      })
      .then(() => {
        console.log("Data inserted successfully!");
        setSignupName("");
        setSignupUsername("");
        setSignupPassword("");
      })
      .catch((error) => {
        console.error("Error inserting data: ", error);
      });
  };

  const handleLogin = () => {
    db.collection("users")
      .where("username", "==", loginUsername)
      .where("password", "==", loginPassword)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.docs.length > 0) {
          const userData = querySnapshot.docs[0].data();
          // alert("Login successful! Welcome " + userData.name);
          localStorage.setItem("loginStatus", "success");
          localStorage.setItem("loggedInUser", userData.name);
          props.showNavbarfunction();
        } else {
          alert("Invalid username or password.");
        }
      })
      .catch((error) => {
        console.error("Error querying data: ", error);
      });
  };

  return (
    <div className={styles.main}>
      <div className={styles.mainLeft}>
        <img src="https://media0.giphy.com/media/YFFGUPTPTRqIhwepA4/200w.gif?cid=6c09b952eew7c2usa1lmocvul9i9zz7sq21hi9gm7rxh29l0&rid=200w.gif&ct=g" />
        <h1>Lpu Community</h1>
        <h2>Ask Anything</h2>
        <p>
          Find events, study materials, competitions, question and answers and
          much more about your university.
        </p>
      </div>
      <div className={styles.mainRight}>
        <div className={styles.form1}>
          <h1>Signup</h1>
          <label htmlFor="">Enter Name</label>
          <input
            type="text"
            value={signupName}
            onChange={(e) => setSignupName(e.target.value)}
          />
          <label htmlFor="">Enter User Name</label>
          <input
            type="text"
            value={signupUsername}
            onChange={(e) => setSignupUsername(e.target.value)}
          />
          <label htmlFor="">Enter Password</label>
          <input
            type="password"
            value={signupPassword}
            onChange={(e) => setSignupPassword(e.target.value)}
          />
          <button onClick={handleSignup}>Signup</button>
        </div>
        <div className={styles.form2}>
          <h1>Login</h1>
          <label htmlFor="">Enter User Name</label>
          <input
            type="text"
            value={loginUsername}
            onChange={(e) => setLoginUsername(e.target.value)}
          />
          <label htmlFor="">Enter Password</label>
          <input
            type="password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
}

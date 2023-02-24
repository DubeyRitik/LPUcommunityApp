import { useState, useEffect } from "react";
import LoginSignup from "./Components/LoginSignup";
import Navbar from "./Components/Navbar";

function App() {
  const [showNavbar, setShowNavbar] = useState(
    localStorage.getItem("loginStatus") === "success"
  );
  const [showLogin, setShowLogin] = useState(
    localStorage.getItem("loginStatus") !== "success"
  );

  function showNavbarfunction() {
    setShowNavbar(true);
    setShowLogin(false);
    localStorage.setItem("loginStatus", "");
  }

  function hideNavbar() {
    setShowNavbar(false);
    setShowLogin(true);
  }

  useEffect(() => {
    if (showNavbar) {
      localStorage.setItem("loginStatus", "success");
    } else {
      localStorage.removeItem("loginStatus");
    }
  }, [showNavbar]);

  return (
    <div className="App">
      {showNavbar && <Navbar hideNavbar={hideNavbar}></Navbar>}
      {showLogin && (
        <LoginSignup showNavbarfunction={showNavbarfunction}></LoginSignup>
      )}
    </div>
  );
}

export default App;

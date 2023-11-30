import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import UserContext from "../auth/UserContext";

/* App home
Routes to / */
function Home() {
  let { currentUser } = useContext(UserContext);

  return (
    <div className="Homepage">
     
    </div>
  );
}

export default Home;

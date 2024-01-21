import React, { useContext } from "react";
import "./Home.css";
import UserContext from "../auth/UserContext";

function Home() {
  let { currentUser } = useContext(UserContext);

  return (
    <div className="Homepage">
    Welcome 
    </div>
  );
}

export default Home; 

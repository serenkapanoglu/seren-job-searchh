import React, { useContext } from "react";
import { Link } from "react-router-dom";
//import "./Home.css";
import UserContext from "../auth/UserContext";

/* App home
Routes to / */
function Home() {
  let { currentUser } = useContext(UserContext);

  return (
    <div className="Homepage">
      <div className="container">
        <h1>Jobly</h1>
        <p className="lead">Jobs on jobs on jobs</p>
        {currentUser ? (
          <h2>
            Welcome, {currentUser.firstName || currentUser.username}
          </h2>
        ) : (
          <p>
            <Link className="btn" to="/login">
              Log in
            </Link>
            <Link className="btn" to="/signup">
              Sign up
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}

export default Home;

// Nav.js

import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../auth/UserContext";
import "./Nav.css"; // Import the CSS file

function Nav({ logout }) {
  let { currentUser } = useContext(UserContext);

  return (
    <nav className="nav">
      <Link to="/" className="brand-link">
        Jobly
      </Link>
      <ul className="nav-list">
        {currentUser ? (
          <>
            <li>
              <NavLink className="nav-link" to="/companies">
                Companies
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/jobs">
                Jobs
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/profile">
                Profile
              </NavLink>
            </li>
            <li>
              <Link className="nav-link" to="/" onClick={logout}>
                Log out {currentUser.first_name || currentUser.username}
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/signup">
                Sign Up
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Nav;

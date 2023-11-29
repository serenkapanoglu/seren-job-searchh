import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";
import Nav from "./routes-nav/Nav";
import Routes from "./routes-nav/Routes";
import LoadingSpinner from "./common/LoadingSpinner";
import JoblyApi from "./api/api";
import UserContext from "./auth/UserContext";
//import jwt from "jsonwebtoken";
import jwt_decode from 'jwt-decode';

/* Name of the key for storing token in localStorage */
export const TOKEN_STORAGE_ID = "jobly-token";

/* Top level app
infoLoaded controls LoadingSpinner rendering
currentUser is the user object from the API and is passed using context */
function App() {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [applicationIds, setApplicationIds] = useState(new Set([]));
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);

/* If there is a token, loads user info from API
If no token (not logged in), this will not run */
  useEffect(function loadUserInfo() {
    async function getCurrentUser() {
      if (token) {
        try {
          let { username } = jwt_decode(token);
          /* puts token on API class */
          JoblyApi.token = token;
          let currentUser = await JoblyApi.getCurrentUser(username);
          setCurrentUser(currentUser);
          setApplicationIds(new Set(currentUser.applications));
        } catch (e) {
          setCurrentUser(null);
        }
      }
      setInfoLoaded(true);
    }

/* Sets infoLoaded back to false to get access to loading spinner while getCurrentUser runs
 */
    setInfoLoaded(false);
    getCurrentUser();
  }, [token]);

  /* Handles logout */
  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  /* Handles signup
  Logs in on signup */
  async function signup(signupData) {
    try {
      let token = await JoblyApi.signup(signupData);
      setToken(token);
      return { success: true };
    } catch (e) {
      console.error("signup failed", e);
      return { success: false, e };
    }
  }

  /* Handles login */
  async function login(loginData) {
    try {
      let token = await JoblyApi.login(loginData);
      setToken(token);
      return { success: true };
    } catch (e) {
      console.error("Login failed", e);
      return { success: false, e };
    }
  }

  /* Sees if job has been applied to */
  function hasAppliedToJob(id) {
    return applicationIds.has(id);
  }

  /* Applies to job and updates applicationIds */
  function applyToJob(id) {
    if (hasAppliedToJob(id)) return;
    JoblyApi.applyToJob(currentUser.username, id);
    setApplicationIds(new Set([...applicationIds, id]));
  }


  if (!infoLoaded) return <LoadingSpinner />;

  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{ currentUser, setCurrentUser, hasAppliedToJob, applyToJob }}
      >
        <div class="App">
          <Nav logout={logout} />
          <Routes login={login} signup={signup} />
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../home/Home";
import CompanyList from "../companies/CompanyList";
import JobList from "../jobs/JobList";
import CompanyDetail from "../companies/CompanyDetail";
import LoginForm from "../auth/LoginForm";
import ProfileForm from "../profiles/ProfileForm";
import SignupForm from "../auth/SignupForm";
import PrivateRoute from "./PrivateRoute";

/* Routes for the application
Redirects to home if route not found
Private routes can only be accessed when logged in */
function Routes({ login, signup }) {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <LoginForm login={login}/>
        </Route>
        <Route exact path="/signup">
          <SignupForm singup={signup}/>
        </Route>
        <Route exact path="/companies">
          <CompanyList />
        </Route>
        <PrivateRoute exact path="/jobs">
          <JobList />
        </PrivateRoute>
        <PrivateRoute exact path="/companies/:handle">
          <CompanyDetail />
        </PrivateRoute>
        <PrivateRoute path="/profile">
          <ProfileForm />
        </PrivateRoute>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default Routes;
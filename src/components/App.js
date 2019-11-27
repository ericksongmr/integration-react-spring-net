import React from "react";
import Login from "./Login";
import HomePage from "./HomePage";
import HomeUser from "./HomeUser";
import UserPage from "./users/UsersPage";
import ManageUserPage from "./users/ManageUserPage";
import ViewClaims from "./users/ViewClaims";
import { Route, Switch } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar />
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={HomePage} />
        <Route path="/users" component={UserPage} />
        <Route path="/user/:id" component={ViewClaims} />
        <Route path="/createUser" component={ManageUserPage} />
        <Route path="/my-account" component={HomeUser} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;

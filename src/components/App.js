import React from "react";
import Login from "./Login";
import HomePage from "./HomePage";
import HomeUser from "./HomeUser";
import HomeUser from "./HomeCustomer";
import UserPage from "./users/UsersPage";
import UserPage from "./customers/CustomersPage";
import ManageUserPage from "./users/ManageUserPage";
import ManageUserPage from "./customers/ManageCustomerPage";
import ViewClaims from "./users/ViewClaims";
import ViewClaims from "./customers/ViewAccounts";
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

        <Route path="/customers" component={CustomerPage} />
        <Route path="/customer/:id" component={ViewAccounts} />
        <Route path="/createCustomer" component={ManageCustomerPage} />
      </Switch>
    </div>
  );
}

export default App;

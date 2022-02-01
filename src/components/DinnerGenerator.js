import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./NavBar/NavBar";
import Login from "./auth/Login";
import { Register } from "./auth/Register";
import "./DinnerGenerator.css";
import useSimpleAuth from "../hooks/ui/useSimpleAuth";

export const Generators = () => {
  const { isAuthenticated } = useSimpleAuth()

  return <>
    <Route
      render={() => {
        if (isAuthenticated()) {
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
};
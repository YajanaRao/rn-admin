import React from "react";
import { LoginScreen } from "../screens/Login";
import { HomeScreen } from "../screens/Home";
import { RegisterScreen } from "../screens/Register";
import { BrowserRouter, Route, Link } from "react-router-dom";

export const AuthNavigator = () => (
  <BrowserRouter>
    <Route exact path="/" component={HomeScreen} />
    <Route path="/login" component={LoginScreen} />
    <Route path="/register" component={RegisterScreen} />
  </BrowserRouter>
);


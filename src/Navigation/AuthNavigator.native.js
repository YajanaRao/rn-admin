import React from "react";
import { LoginScreen } from "../screens/Login";
import { HomeScreen } from "../screens/Home";
import { RegisterScreen } from "../screens/Register";

import { NativeRouter, Route, Link } from "react-router-native";

export const AuthNavigator = () => (
  <NativeRouter>
    <Route exact path="/" component={HomeScreen} />
    <Route path="/login" component={LoginScreen} />
    <Route path="/register" component={RegisterScreen} />
  </NativeRouter>
);


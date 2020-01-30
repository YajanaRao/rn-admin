import React from "react";
import { Text, View } from "react-native";
import { LoginScreen } from "./screens/Login";
import { HomeScreen } from "./screens/Home";
import { RegisterScreen } from "./screens/Register";
import { NativeRouter, Route, Link } from "react-router-native";

const AppNavigator = () => (
  <NativeRouter>
    <Route exact path="/" component={HomeScreen} />
    <Route path="/login" component={LoginScreen} />
    <Route path="/register" component={RegisterScreen} />
  </NativeRouter>
);

export default AppNavigator;

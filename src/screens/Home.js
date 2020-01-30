import React from "react";
import { View, Text } from "react-native";
import { Link } from "react-router-native";
import { Header } from "../components/Header";

export const HomeScreen = () => {
  return (
    <View>
      <Header />
      <Link to="/login">
        <Text>Log out</Text>
      </Link>
    </View>
  );
};

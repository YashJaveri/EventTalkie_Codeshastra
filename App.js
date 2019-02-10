import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Welcome from "./src/Screens/Welcome";
import Chat from "./src/Screens/Chat";
import Home from "./src/Screens/Home";
import Constants from "./src/Constants";

const AppNavigator = createStackNavigator(
  {
    Welcome: Welcome,
    Home: Home,
    Chat: Chat
  },
  {
    initialRouteName: "Home"
  }
);

export default class App extends React.Component {
  static navigationOptions = ({ navigation }) => {
    header: false;
  };

  render() {
    return <AppNavigator />;
  }
}

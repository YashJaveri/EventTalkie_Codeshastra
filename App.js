import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import Welcome from './src/Screens/Welcome';
import  Chat from './src/Screens/Chat';
import Home from './src/Screens/Home';
import Constants from './src/Constants';


const AppNavigator = createStackNavigator({
  Welcome:Welcome,
  Home:Home,
  Chat:Chat
},{
  initialRouteName:'Chat'
},
{
  navigationOptions:{
    headerStyle: {
      backgroundColor: Constants.SECONDARY,
      borderBottomWidth: 0,
      borderRadius: 0.5,
      elevation: 0,
    },
    headerBackTitle: null,
    headerTintColor: Constants.PRIMARY,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
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



/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import Welcome from './src/Components/Welcome'

const AppNavigator = createStackNavigator({
  Welcome:Welcome,
},{
  initialRouteName:'Welcome'
});


export default createAppContainer(AppNavigator);
import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import App from './App';
import AudioDetail from './AudioDetail';

const AppNavigator = createStackNavigator({
  App: {
    screen: App
  },
  AudioDetail: {
    screen: AudioDetail
  }
});

export default createAppContainer(AppNavigator);
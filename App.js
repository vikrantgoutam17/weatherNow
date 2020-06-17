import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import WeatherReport from "./screens/WeatherReport";
import Form from "./components/Form";

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Know Weather Of Your City"
          component={Home}
          options={{ headerShown: true }}
        />
        <RootStack.Screen
          name="WeatherReport"
          component={WeatherReport}
          options={{ headerShown: true }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

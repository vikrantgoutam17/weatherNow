import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import WeatherReport from "./screens/WeatherReport";
import Form from "./components/Form";

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();
// const MainStackScreen = () => {
//   return (
//     <MainStack.Navigator>
//       <MainStack.Screen name="Home" component={Home} />
//       <MainStack.Screen
//         name="WeatherReport"
//         component={WeatherReport}
//         options={({ route }) => ({ title: route.params.paletteName })}
//       />
//     </MainStack.Navigator>
//   );
// }
export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="main"
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

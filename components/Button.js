import React from "react";
import { View, Text, TouchableOpacity, NativeModules } from "react-native";
import GetWeather from "../modules/GetWeather";

const Button = ({ city, country, nav }) => {
  return (
    <TouchableOpacity
      onPress={async () => {
        const report = await GetWeather(city, country);
        nav.navigate("WeatherReport", report);
      }}
    >
      <View>
        <Text>get Weather</Text>
      </View>
    </TouchableOpacity>
  );
};
export default Button;

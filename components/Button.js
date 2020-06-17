import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  NativeModules,
  StyleSheet,
} from "react-native";
import GetWeather from "../modules/GetWeather";

const Button = ({ city, country, nav }) => {
  return (
    <TouchableOpacity
      onPress={async () => {
        const report = await GetWeather(city, country);
        if (report.cod === 200)
          nav.navigate("WeatherReport", report.weather[0].description);
        else nav.navigate("WeatherReport", "city not found");
      }}
    >
      <View style={styles.container}>
        <Text style={styles.text}>get Weather</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3FFC03",
    margin: 10,
    borderRadius: 10,
  },
  text: {
    color: "#FC0312",
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    margin: 10,
  },
});
export default Button;

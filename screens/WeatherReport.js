import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Form from "../components/Form";
import { color } from "react-native-reanimated";

const Home = ({ route }) => {
  console.log(route.params.weather[0].description);
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>
        {route.params.weather[0].description}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#aaa",
  },
});

export default Home;

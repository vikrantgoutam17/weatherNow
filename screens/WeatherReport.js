import React, { useState } from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import Form from "../components/Form";
import { color } from "react-native-reanimated";

const Home = ({ route }) => {
  console.log(route.params);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
          {route.params}
        </Text>
      </View>
    </SafeAreaView>
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

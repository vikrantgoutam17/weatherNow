import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Form from "../components/Form";
// import Login_button from "button-component";
const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Form nav={navigation}></Form>
      </View>
      {/* <Login_button></Login_button> */}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  form: {
    padding: 10,
    margin: 100,
    backgroundColor: "#999",
    width: "auto",
    height: 450,
  },
});

export default Home;

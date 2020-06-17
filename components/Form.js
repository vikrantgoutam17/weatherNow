import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Button from "./Button";

const Form = ({ nav }) => {
  const [city, setCity] = useState("delhi");
  const [country, setCountry] = useState("india");
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Enter Country </Text>
      <TextInput
        style={[styles.text, styles.input]}
        onChangeText={(text) => setCountry(text)}
        value={country}
        placeholder={country}
      />
      <Text style={styles.text}> Enter City </Text>
      <TextInput
        style={[styles.text, styles.input]}
        onChangeText={(text) => setCity(text)}
        value={city}
        placeholder={city}
      />
      <Button city={city} country={country} nav={nav} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    width: 300,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    margin: 10,
    width: 200,
    textAlign: "center",
  },
  input: {
    borderColor: "#000",
    borderWidth: 1,
    backgroundColor: "#eee",
    color: "#333",
    borderRadius: 10,
  },
});
export default Form;

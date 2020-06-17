import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import Button from "./Button";

const Form = ({ nav }) => {
  const [city, setCity] = useState("delhi");
  const [country, setCountry] = useState("india");
  return (
    <View>
      <Text> Enter Country </Text>
      <TextInput
        onChangeText={(text) => setCountry(text)}
        value={country}
        placeholder={country}
      />
      <Text> Enter City </Text>
      <TextInput
        onChangeText={(text) => setCity(text)}
        value={city}
        placeholder={city}
      />
      <Button city={city} country={country} nav={nav} />
    </View>
  );
};

export default Form;

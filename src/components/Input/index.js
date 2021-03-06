import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
const Input = ({ placeholder, onChangeText, value }) => {
  return (
    <View style={styles.view}>
      <TextInput
        onChangeText={onChangeText}
        style={styles.input}
        placeholder={placeholder}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    height: 50,
    margin: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 4,
    padding: 15
  }
});

export default Input;

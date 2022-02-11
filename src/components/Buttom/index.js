import React from "react";
import { TouchableHighlight, Text, StyleSheet } from "react-native";

const Button = ({ title, onPress }) => (
  <TouchableHighlight style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  button: {},
  text: {}
});

export default Button;

import React, { useState } from "react";
import { StyleSheet, View, FlatList, Text, Modal } from "react-native";
import Item from "./components/Item";
import Button from "./components/Button";
import Input from "./components/Input";
import data from "../mocks/data.json";

export default function Ui() {
  const [reminders, setReminders] = useState(data);
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState("");
  const handlePress = () => {
    setVisible(true);
  };
  const handleChange = (text) => {
    setText(text);
  };
  const handleSave = () => {
    setReminders([
      {
        key: Math.random().toString(36).split(".")[1],
        title: text
      },
      ...reminders
    ]);
    setVisible(false);
    setText("");
  };
  return (
    <View style={[styles.container, styles.gray]}>
      <View style={styles.header}>
        <Text style={styles.title}>Reminder</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Add" onPress={handlePress} />
      </View>
      <FlatList data={reminders} renderItem={Item} />
      <Modal visible={visible} animationType="slide">
        <View style={[styles.container, styles.center]}>
          <Text style={styles.modalTitle}>Add reminder</Text>
          <View style={styles.view}>
            <Input
              onChangeText={handleChange}
              placeholder="Reminder"
              value={text}
            />
          </View>
          <Button title="Save" onPress={handleSave} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  center: {
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    height: 60,
    margin: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  title: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 28
  },
  gray: {
    backgroundColor: "#eee"
  },
  modalTitle: {
    fontSize: 28
  },
  view: {
    height: 50,
    margin: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});

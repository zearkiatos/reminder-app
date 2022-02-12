import React, { useState } from "react";
import { StyleSheet, View, FlatList, Text, Modal } from "react-native";
import Item from "./src/components/Item";
import Button from "./src/components/Buttom";
import Input from "./src/components/Input";
import data from "./mocks/data.json";

export default function App() {
  const [reminders, setReminders] = useState(data);
  const [visible, setVisible] = useState(false);
  const handlePress = () => {
    setVisible(true);
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
            <Input placeholder="Reminder" />
          </View>
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

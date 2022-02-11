import { StyleSheet, View, FlatList, Button, Text } from 'react-native';
import Item from './src/components/Item';
import data from './mocks/data.json';

export default function App() {
  const handlePress = () => {

  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Reminder</Text>
      </View>
      <Button title='Add' onPress={handlePress} />
      <FlatList
        data={data}
        renderItem={Item}
     />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  }
});
